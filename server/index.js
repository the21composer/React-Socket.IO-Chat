const server = require('http').createServer()
const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
})

const messageHandler = require('./handlers/messageHandlers')
const userHandler = require('./handlers/userHandlers')

const onConnection = (socket) => {
  console.log('User connected')

  // joining room
  const { roomId } = socket.handshake.query
  socket.roomId = roomId

  socket.join(roomId)

  messageHandler(io, socket)
  userHandler(io, socket)

  socket.on('disconnect', () => {
    console.log('User disconnected')
    socket.leave(roomId)
  })
}

io.on('connection', onConnection)

const port = process.env.PORT || 5000
server.listen(port, () => {
  console.log(`Server ready. Port: ${port}`)
})
