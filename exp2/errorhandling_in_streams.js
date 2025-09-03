// Write a program that demonstrates error handling in streams. Create a Readable stream that tries to read from a non-existent file and handles the error by emitting an error event.
const fs = require('fs');

const readStream = fs.createReadStream('nonexistent.txt');

readStream.on('data', (chunk) => {
  console.log(chunk);
});

readStream.on('error', (err) => {
  console.error("Error: Could not read file:", err.message);
});
