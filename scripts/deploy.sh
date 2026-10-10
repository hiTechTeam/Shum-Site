#!/bin/sh
# Builds the site locally and publishes out/ to the gh-pages branch, which
# GitHub Pages serves at the domain from lib/site.ts.
set -eu
cd "$(dirname "$0")/.."

if [ -n "$(git status --porcelain)" ]; then
  echo "Commit or stash your changes first: the site is published from the last commit." >&2
  exit 1
fi
domain=$(sed -n 's#^export const siteUrl = "https://\([^"]*\)";#\1#p' lib/site.ts)
[ -n "$domain" ] || { echo "siteUrl not found in lib/site.ts" >&2; exit 1; }
revision=$(git rev-parse --short HEAD)

npm run build

worktree=$(mktemp -d)
trap 'git worktree remove --force "$worktree" >/dev/null 2>&1 || true; rm -rf "$worktree"' EXIT
git fetch -q origin gh-pages
git worktree add -q --detach "$worktree" origin/gh-pages
find "$worktree" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R out/. "$worktree"/
touch "$worktree/.nojekyll"
printf '%s\n' "$domain" > "$worktree/CNAME"

cd "$worktree"
git add -A
if git diff --cached --quiet; then
  echo "Nothing to publish: https://$domain is up to date."
  exit 0
fi
git commit -q -m "Publish $revision"
git push -q origin HEAD:gh-pages
echo "Published $revision to https://$domain (GitHub Pages updates within a minute or two)."
