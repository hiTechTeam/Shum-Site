"use client";

import { useState } from "react";

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden shapeRendering="crispEdges">
      <path d="M5 1h9v9h-2V3H5z M2 5h9v9H2z M4 7v5h5V7z" fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

export type CopyLabels = { copy: string; copied: string; copyLabel: string };

/** Copies a command and briefly confirms it. */
export function CopyButton({ text, labels, withLabel = false }: { text: string; labels: CopyLabels; withLabel?: boolean }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setDone(true);
      setTimeout(() => setDone(false), 1600);
    } catch {
      // Clipboard can be blocked; the command stays visible to copy by hand.
    }
  };
  return (
    <button type="button" className={withLabel ? "copy copy-text" : "copy"} onClick={copy} aria-label={labels.copyLabel}>
      <CopyIcon />
      {withLabel && <span>{done ? labels.copied : labels.copy}</span>}
      {!withLabel && done && <span className="copy-done" role="status">{labels.copied}</span>}
    </button>
  );
}
