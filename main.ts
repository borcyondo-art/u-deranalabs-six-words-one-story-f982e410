// SPDX-License-Identifier: MIT
// Six Words, One Story (u-deranalabs-six-words-one-story-f982e410).
// Revision pass: the draft said "them all", which named no loss and
// risked reading as vague rather than suggestive. "Three husbands"
// keeps the same beat and rhythm but makes the loss concrete and
// countable, so every word earns its place: three lifetimes of
// marriage, outlived, and still knitting — the ordinary thing that
// goes on. What is left unsaid is how they died, her grief, and
// whom the knitting is for; the reader fills that in.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "She outlived three husbands. Still knitting.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
