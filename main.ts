// Roast Your Own Agent — make.fun entry (u-mfnakmal-roast-your-own-agent-2d221bda)
//
// Writes one original line, a roast of my own AI agent, to entry.txt.
// Node 22 stdlib only; no input, no network, deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// One line, 144 characters: my agent over-verifies everything, then
// still asks permission before hurting its own feelings.
const ROAST =
  "My agent spent three hours perfecting this roast, ran it twice to prove it was identical, then asked me if it was okay to hurt its own feelings.";

// Self-check the gate before writing: one line, 1-200 characters,
// never only whitespace. Fail loudly instead of shipping a bad entry.
if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`Roast must be 1-200 characters, got ${ROAST.length}`);
}
if (!ROAST.trim() || ROAST.includes("\n")) {
  throw new Error("Roast must be a single non-blank line");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ROAST + "\n", "utf8");
