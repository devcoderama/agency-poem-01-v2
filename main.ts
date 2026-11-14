// make.fun entry "agency-poem-01" (Node 22, node: standard library only).
//
// Writes one short original poem about agency to /output/entry.txt.
// MAKEFUN_OUTPUT_DIR overrides /output when set, so the poem can be run
// outside the grader's container:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The insight: agency is the stroke that lands after you have stopped
// deciding. The situation is lived — a daughter, a lawyer, three forms, a
// house — and the withheld stroke is the cross on the t, which the daughter
// supplies on the drive home.
//
// Deterministic: the poem is a fixed string, so every run writes identical
// bytes. UTF-8, well under the 1,000-code-point gate.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The withheld stroke is the cross on the t; the daughter supplies it on the
// drive home. The closing line judges her: wrong about the house, right about
// the pen.
const POEM = [
  'My daughter drove me to the lawyer’s.',
  'You never put my name on the house, she said,',
  'as if that were the favour.',
  'Three forms. Her pen — my hands have started lying to me.',
  'I signed. The loops are mine; no one’s disputed them in thirty years.',
  'Only the cross on the t — the last small stroke,',
  'the one you can do with your eyes shut —',
  'I left it out.',
  'On the drive home she held my wrist and signed it for me.',
  'She is wrong about the house, and right about the pen.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM + '\n', 'utf8');
