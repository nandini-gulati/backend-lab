// Write a program that uses process.stdin to read user input from the command line. Ask the user for their name and greet them by printing "Hello, [name]!" to the console.
process.stdout.write("Enter your name: ");

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Hello, ${name}!`);
  process.exit(); // Exit after greeting
});
