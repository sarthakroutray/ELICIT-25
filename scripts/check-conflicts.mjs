#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const EXTS = new Set(['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.md', '.html']);
const RE_LEFT = /^<<<<<<<(\s|$)/;
const RE_MID = /^=======$/;
const RE_RIGHT = /^>>>>>>>(\s|$)/;
const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', 'build']);

let found = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (!EXTS.has(ext)) continue;
      const content = fs.readFileSync(full, 'utf8');
      const lines = content.split(/\r?\n/);
      if (lines.some(l => RE_LEFT.test(l) || RE_MID.test(l) || RE_RIGHT.test(l))) {
        found.push(full);
      }
    }
  }
}

walk(ROOT);

if (found.length) {
  console.error('\nMerge conflict markers found in:');
  for (const f of found) console.error(' -', path.relative(ROOT, f));
  console.error('\nPlease resolve conflicts (<<<<<<<, =======, >>>>>>>) and commit.');
  process.exit(1);
}

console.log('No merge conflict markers detected.');