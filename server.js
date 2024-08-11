// server.js
const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer();
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('event', (data) => {
    console.log('Event received:', data);
    // Broadcast the event to all other clients
    socket.broadcast.emit('event', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
