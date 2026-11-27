// Entry writer for "One Line, No Deadline Met".
//
// The joke is built from three named fragments and assembled in code:
// the setup (the deadline as a software update), the habit (the snooze
// button), and the turn (tomorrow fighting back). The assembled text
// is the whole entry; nothing else is written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "/output";
const ENTRY_FILE = "entry.txt";

// Fragment 0 frames the deadline as something postponable; fragment 1
// is the repeated dodge; fragment 2 is the punch, where the dodge
// itself takes legal action.
const FRAGMENTS = {
  setup: "I treated the deadline like a software update",
  habit: "kept clicking 'remind me tomorrow'",
  turn: "until tomorrow filed a restraining order.",
} as const;

function assemble(f: typeof FRAGMENTS): string {
  return `${f.setup} and ${f.habit} ${f.turn}`;
}

function main(): void {
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(join(OUT_DIR, ENTRY_FILE), assemble(FRAGMENTS), "utf8");
}

main();
