//Reading into a file asynchronously and writing code for handling error if file not found to read.
const fs = require('fs');
const path = __dirname + '/example.txt';

console.log('Trying to read:', path);

fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
    console.error('Full error details:', err);
    if (err.code === 'ENOENT') {
      console.error('Error: File not found at path above.');
    } else {
      console.error('Some other error causing failure:', err.message);
    }
    return;
  }
  console.log('File content:', data);
});
