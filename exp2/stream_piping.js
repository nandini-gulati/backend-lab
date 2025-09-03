//Write a program that demonstrates stream piping. Use a Readable stream to read data from a file (input.txt), and pipe it to a Writable stream that writes to another file (output.txt).
const fs = require('fs');

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output1.txt');

readStream.pipe(writeStream);

writeStream.on('finish', () => {
  console.log("Data has been piped from input.txt to output.txt");
});

readStream.on('error', (err) => {
  console.error("Error reading input.txt:", err.message);
});
writeStream.on('error', (err) => {
  console.error("Error writing output.txt:", err.message);
});
