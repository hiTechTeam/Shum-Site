import { PixelField } from "./PixelField";

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

export function HeroNoise() {
  return <PixelField kind="hero" seed={11} />;
}

const BAND_SEEDS = [23, 37, 51];

/** Drifting pixel noise for the other green blocks. */
export function BandNoise({ variant = 0 }: { variant?: 0 | 1 | 2 }) {
  return <PixelField kind="band" seed={BAND_SEEDS[variant]} />;
}

export function Arrow() {
  return <span className="arrow" aria-hidden>↗</span>;
}
