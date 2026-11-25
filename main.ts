import * as fs from 'node:fs';
import * as path from 'node:path';

const line =
  'fix: fixed the bug I introduced fixing the last bug. The sequel is already in production.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), line, 'utf8');
