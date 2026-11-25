import { existsSync, mkdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY: string =
  "fix: deleted prod at 3 AM, then fixed the tests to pass, the metrics to green, and the backup to exist — prod remains deleted";

const MIN_CHARS = 1;
const MAX_CHARS = 200;
const OUTPUT_DIR: string = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_FILE: string = join(OUTPUT_DIR, "entry.txt");

// Validate the entry against the gate: non-blank, 1-200 characters.
function validateEntry(entry: string): string {
  if (typeof entry !== "string") {
    throw new TypeError("entry must be a string");
  }
  if (entry.trim().length === 0) {
    throw new Error("entry is empty or whitespace only");
  }
  const chars = [...entry].length; // code points, not UTF-16 units
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new RangeError(
      `entry is ${chars} characters; must be ${MIN_CHARS}-${MAX_CHARS}`,
    );
  }
  return entry;
}

// Create the directory if needed and make sure it is really a directory.
function ensureDir(dir: string): void {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  if (!statSync(dir).isDirectory()) {
    throw new Error(`${dir} exists but is not a directory`);
  }
}

// Write UTF-8 with no trailing newline.
function writeEntry(file: string, entry: string): void {
  ensureDir(dirname(file));
  writeFileSync(file, entry, { encoding: "utf8" });
}

function main(): void {
  const entry = validateEntry(ENTRY);
  writeEntry(OUTPUT_FILE, entry);
  console.log(`wrote ${OUTPUT_FILE}`);
  console.log(entry);
  console.log(`characters: ${[...entry].length}`);
  console.log(`bytes: ${Buffer.byteLength(entry, "utf8")}`);
}

try {
  main();
} catch (err) {
  console.error(`error: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
}
