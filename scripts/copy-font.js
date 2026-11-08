const fs = require('fs'), path = require('path');
const src = path.join(__dirname, '..', 'node_modules', '@fontsource', 'orbitron', 'files');
const dst = path.join(__dirname, '..', 'www', 'fonts');
fs.mkdirSync(dst, { recursive: true });
for (const w of ['400', '700', '900']) {
  const f = `orbitron-latin-${w}-normal.woff2`;
  fs.copyFileSync(path.join(src, f), path.join(dst, f));
}
