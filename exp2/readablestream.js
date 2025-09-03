//1)	Write a program that uses a Readable stream to read data from a file (data.txt). Output the file content to the console. Ensure the file exists before reading, and handle any errors if the file is missing.
const fs = require('fs');
const path = '/Users/dhruvgulati/backend lab/exp2/data.txt';

// Check if file exists before reading
fs.access(path, fs.constants.F_OK, (err) => {
  if (err) {
    console.error("Error: File does not exist!");
  } else {
    const readStream = fs.createReadStream(path, { encoding: 'utf8' });

    readStream.on('data', (chunk) => {
      console.log(chunk);
    });

    readStream.on('error', (err) => {
      console.error("Error reading file:", err.message);
    });
  }
});
