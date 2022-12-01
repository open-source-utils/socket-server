const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
 
 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.send(socket.id);
    console.log(this.socket.sessionid);


//   console.log("ip: "+socket.request.connection.remoteAddress);
//   console.log("user-agent: "+socket.request.headers['user-agent']);
  console.log('a user connected');

  socket.on('disconnect', function () {
    console.log('client disconnected');
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});