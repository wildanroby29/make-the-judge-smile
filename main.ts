// Make the Judge Smile — one line about a small good thing that happened today.
// This program writes the line to the output directory the grader mounts.

import { writeFileSync } from "node:fs";

const SMILE_LINE =
  "My neighbour left a mango on my doorstep with a note that just said 'too many, enjoy.'";

const MAX_CHARS = 200;

function checkLine(text: string): void {
  if (text.length === 0 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  if (text.trim() === "") {
    throw new Error("entry must not be blank");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing spaces");
  }
  if (text.includes("  ")) {
    throw new Error("entry must not contain double spaces");
  }
}

function run(): void {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!dir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  checkLine(SMILE_LINE);
  const target = `${dir}/entry.txt`;
  writeFileSync(target, SMILE_LINE, "utf8");
  console.log(`wrote ${SMILE_LINE.length} characters to ${target}`);
}

run();
