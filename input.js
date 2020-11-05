// Input.js

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 * 
 */

// Stores the active TCP connection object.  
let connection;



// To be able to use ctrl+C to exit on the command line. 
// To be able to use "awsd" to move the snake.
const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    connection.write("Move: up");
  } else if (data === 'd') {
    connection.write("Move: right");
  } else if (data === 's') {
    connection.write("Move: down")
  } else if (data === 'a') {
    connection.write("Move: left");
  } else if (data === 't') {
    connection.write("Say: ur gonna lose");
  }
}


const setupInput = function(conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", (data) => {
    handleUserInput(data)
  }) // Callback to the handleUserInput function
  return stdin;
};



module.exports = { setupInput }; 
