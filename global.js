const amount = 12;

if (amount < 10) {
  console.log('small number');
} else {
  console.log('large number');
}

console.log(`hey it's my first node app!!!`);

// GLOBALS - NO WINDOW

// __dirname - path to current directory
// __filename = filename
// require - function to use modules (CommonJS)
// module - info about current module (file)
//  process - info about evn where the program is being executed
// setInterval and setTimeout are included

console.log(__filename, module);
