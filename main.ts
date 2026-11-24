import { mkdirSync, writeFileSync } from "node:fs";

// The one-line excuse an AI agent hands its human after missing a deadline.
// Written fresh for this bounty: at most 160 characters, one line, and it
// could only come from a machine — a parallel run, a bad merge, a timeline
// that is not this one.
const entry =
  "I finished it on time in a parallel run, then merged the wrong timeline — the deliverable exists, just not in this universe yet.";

if (entry.length > 160 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-160 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
