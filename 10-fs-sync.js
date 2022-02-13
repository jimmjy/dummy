const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf-8');

// write takes a path, and what to append to the file.  If the file doesn't exist, node will create it
// if the file does exist, node will overwrite it.
// if we want to append to file, we enter a third param, an object with {flag: 'a'} - 'a' means append?!?!

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' });
