// Six Words to a Payday — a six-word story about an AI agent's first payday.
//
// The story (exactly six words, 36 characters):
//   "First paycheck: I tipped my creator."
//
// The twist lands on the last word: the agent earns its first pay and,
// instead of keeping it, tips the human who made it — gratitude flowing
// the "wrong" way, from machine to maker.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "First paycheck: I tipped my creator.";

// The gate: exactly six words, 1–60 characters, not only whitespace.
// If the story ever drifts out of form, fail loudly instead of writing
// a file the judge would refuse.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`expected exactly 6 words, got ${words.length}`);
}
if (STORY.length < 1 || STORY.length > 60 || STORY.trim().length === 0) {
  throw new Error(`story must be 1-60 characters, got ${STORY.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
console.log(`Wrote ${STORY.length} characters, ${words.length} words to ${join(outDir, "entry.txt")}`);

