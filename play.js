// Client snake play.js

const { connect } = require('./client');
console.log('Connecting ...');
connect();


/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 * 
 */

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
  stdin.on("data", handleUserInput)
  return stdin;
};

setupInput();




// // To help terminate the app

// const stdin = process.stdin;
// // don't worry about these next two lines of setup work.
// stdin.setRawMode(true);
// stdin.setEncoding('utf8');

// ////////////
// // Event Handling for User Input
// ////////////

// // on any input from stdin (standard input), output a "." to stdout
// handleUserInput = () => {
//   stdin.on('data', (key) => {
//     //process.stdout.write('.');
//     if (key === '\u0003') {
//       process.exit();
//     }
//   });
// }

// console.log('after callback');