/* eslint no-console:0 */
const pirates = require('pirates');

function matcher() {
  return true;
}

console.log('Registering pirates-hook...');
pirates.addHook((code, filename) => {
  console.log('filename', filename);
  console.log('code', code);
  return code;
}, { exts: ['.js', '.mjs'], matcher });
console.log('Registered pirates-hook.');
