/* eslint no-console:0 */
const pirates = require('pirates');
debugger;

function matcher() {
  return true;
}

pirates.addHook((code, filename) => {
  debugger;
  console.log('filename', filename);
  console.log('code', code);
  return code;
}, { exts: ['.js', '.mjs'], matcher });
