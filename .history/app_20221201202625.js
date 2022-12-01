const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const log = require('./log-handler');

 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('client id - '+ socket.id); 


//   console.log("ip: "+socket.request.connection.remoteAddress);
//   console.log("user-agent: "+socket.request.headers['user-agent']);
  console.log('a user connected');

  socket.on('chat message', msg => {
    io.emit('chat message', msg);

  var address = socket.handshake.address;
  console.log('New connection from ' + address.address + ':' + address.port);
    log.append(msg);
  });

  socket.on('disconnect', function () {
    console.log('client disconnected');
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});