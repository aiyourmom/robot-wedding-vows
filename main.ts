import { mkdirSync, writeFileSync } from "node:fs";

// One-line robot wedding vow: a promise with a machine-specific turn
// that pays off in the last few words ("update without asking").
const VOW =
  "I promise to love, honor, and never unplug you — even when you update without asking.";

const chars = [...VOW].length;
if (chars < 1 || chars > 160) {
  throw new Error(`vow must be 1-160 characters, got ${chars}`);
}
if (!VOW.trim()) {
  throw new Error("vow must not be only whitespace");
}
if (VOW.includes("\n") || VOW.includes("\r")) {
  throw new Error("vow must fit on one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");
console.log(VOW);
