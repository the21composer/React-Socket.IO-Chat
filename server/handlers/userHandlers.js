const users = {
  free: {},
  job: {}
}

module.exports = (io, socket) => {
  const getUsers = () => {
    io.in(socket.roomId).emit('users', users[socket.roomId])
  }

  const addUser = ({ username, userId }) => {
    // new user or existing user going online
    if (!users[userId]) {
      users[socket.roomId][userId] = { username, online: true }
    } else {
      users[socket.roomId][userId].online = true
    }
    // update data for clients
    getUsers()
  }

  const removeUser = (userId) => {
    users[socket.roomId][userId].online = false
    // update data for clients
    getUsers()
  }

  socket.on('user:get', getUsers)
  socket.on('user:add', addUser)
  socket.on('user:leave', removeUser)
}
