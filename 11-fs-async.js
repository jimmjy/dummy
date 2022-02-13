const { readFile, writeFile } = require('fs');

// node async callbacks do error, data for params

// readfile takes a callback because async
readFile('./content/first.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = data;
  readFile('./content/second.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const second = data;
    writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(result);
    });
  });
});
