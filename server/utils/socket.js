// utils/socket.js
const io = require('socket.io')(process.env.PORT || 3001);

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('joinRoom', ({ userId }) => {
    socket.join(userId);
  });

  socket.on('sendMessage', ({ senderId, receiverId, content }) => {
    io.to(receiverId).emit('newMessage', { 
      senderId, 
      receiverId, 
      content 
    });
  });
});