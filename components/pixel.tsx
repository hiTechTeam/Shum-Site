// Pixel pieces of the Shum look: the cloud logo, the checkerboard step
// between sections and the "pixel noise" borrowed from the typing indicator.

const LOGO = [
  "..########..",
  ".##########.",
  "############",
  "############",
  "############",
  "############",
  ".##########.",
  "..########..",
  "..###.......",
  "..##........",
  "..#.........",
];

export function Logo({ height = 27 }: { height?: number }) {
  return (
    <svg
      className="logo-cloud"
      viewBox="0 0 12 11"
      height={height}
      width={(height * 12) / 11}
      shapeRendering="crispEdges"
      aria-hidden
    >
      {LOGO.flatMap((row, y) =>
        [...row].map((cell, x) =>
          cell === "#" ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" /> : null,
        ),
      )}
    </svg>
  );
}

/** Checkerboard row that steps from one section colour into the next. */
export function PixelStep({ from, to }: { from: string; to: string }) {
  return <div className="pixel-step" style={{ ["--from" as string]: from, ["--to" as string]: to }} aria-hidden />;
}

type Square = { x: number; y: number; o: number };

// Same deterministic layout as the Figma mock: denser towards the top right
// corner and the bottom edge, never under the hero text.
function noise(width: number, height: number, cell: number, seed: number) {
  let state = seed;
  const random = () => {
    state = (state * 1103515245 + 12345) & 0x7fffffff;
    return state / 0x7fffffff;
  };
  const corner: Square[] = [];
  const edge: Square[] = [];
  const opacities = [0.08, 0.14, 0.22, 0.35];
  for (let gx = 0; gx < width / cell; gx++) {
    for (let gy = 0; gy < height / cell; gy++) {
      const x = gx * cell;
      const y = gy * cell;
      const toCorner = Math.hypot((width - x) / width, y / height);
      const toEdge = Math.hypot(x / width, (height - y) / height);
      const chance = Math.max(0, 0.42 - Math.min(toCorner, toEdge * 1.3) * 0.75);
      if (random() >= chance) continue;
      const o = opacities[Math.floor(random() * opacities.length)];
      if (y >= height - 40) edge.push({ x, y: y - (height - 48), o });
      else if (x >= 760) corner.push({ x: x - 760, y, o });
    }
  }
  return { corner, edge };
}

const HERO = noise(1440, 693, 12, 11);

export function HeroNoise() {
  const square = ({ x, y, o }: Square) => (
    <rect key={`${x}-${y}`} x={x} y={y} width="12" height="12" opacity={o} />
  );
  return (
    <>
      <svg className="noise noise-corner" width="680" height="693" viewBox="0 0 680 693" aria-hidden shapeRendering="crispEdges">
        {HERO.corner.map(square)}
      </svg>
      <svg className="noise noise-edge" width="1440" height="48" viewBox="0 0 1440 48" preserveAspectRatio="xMinYMax slice" aria-hidden shapeRendering="crispEdges">
        {HERO.edge.map(square)}
      </svg>
    </>
  );
}

export function Arrow() {
  return <span className="arrow" aria-hidden>↗</span>;
}
