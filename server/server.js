const express = require('express');
const path = require('path')

const routes = require('./routes')
const db = require('./config/connection')
const http = require('http')
const socketIo = require('socket.io')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))



app.use(express.json())

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/dist')))
// }

app.use('/', routes)

// Socket.IO setup!!!!!
const server = http.createServer(app)
const io = socketIo(server)

io.on('connection', (socket) => {
  console.log('New client connected')

  socket.on('joinRoom', ({ userId }) => {
    socket.join(userId)
  })

  socket.on('sendMessage', ({ senderId, receiverId, content }) => {
    io.to(receiverId).emit('newMessage', { 
      senderId, 
      receiverId, 
      content 
    })
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

db.once('open', () => {
  server.listen(PORT, () => console.log(`App listening on ${PORT}`))
})