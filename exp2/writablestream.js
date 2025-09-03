//2)	Write a program that creates a Writable stream to write a string ("Hello, Node.js!") to a file (output.txt). If the file already exists, overwrite it. Print a success message once the data is written.
const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');
writeStream.write("Hello, Node.js!", (err) => {
  if (err) {
    console.error("Error writing to file:", err.message);
  } else {
    console.log("Data successfully written to output.txt");
  }
});
writeStream.end();
