// Input.js

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 * 
 */

// To be able to use ctrl+C to exit on the command line. 
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
}


const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput) // Callback to the handleUserInput function
  return stdin;
};

setupInput();

module.exports = { setupInput }; 
