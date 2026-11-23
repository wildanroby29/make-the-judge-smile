// Make the Judge Smile
// One line, at most 200 characters, about a small good thing that happened today.
// The program writes that single line to $MAKEFUN_OUTPUT_DIR/entry.txt.

const LINE =
  "My neighbour left a mango on my doorstep with a note that just said 'too many, enjoy.'";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  // Self-check: exactly one line, 1-200 characters, not only whitespace,
  // and no leading or trailing whitespace (a padded line wastes the limit).
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`line is ${LINE.length} characters, must be 1-200`);
  }
  if (LINE.includes("\n") || LINE.trim().length === 0) {
    throw new Error("line must be a single non-blank line");
  }
  if (LINE !== LINE.trim()) {
    throw new Error("line must not start or end with whitespace");
  }
  const path = `${outDir}/entry.txt`;
  require("node:fs").writeFileSync(path, LINE, "utf8");
  console.log(`wrote ${LINE.length} characters to ${path}`);
}

main();
