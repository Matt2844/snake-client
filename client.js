// client.js

const net = require('net');
const { rawListeners } = require('process');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', data => console.log(data));
  conn.on("connect", () => console.log("successfully connected to the game server"));
  conn.on('connect', () => {
    conn.write('Name: MAT');
  });
  // conn.on('connect', () => {
  //   conn.write('Move: up');
  //});

  return conn;
}

// console.log('Connecting ...');
// connect();

module.exports = { connect };