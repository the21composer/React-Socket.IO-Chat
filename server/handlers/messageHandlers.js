const {nanoid} = require("nanoid");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

// setting up messages database
const db = low(new FileSync("db/messages.json"));

db.defaults({
    free:{
        messages:[]
    },
    job:{
        messages:[]
    }
}).write();

module.exports = (io, socket) => {
    const getMessages = () => {
        const messages = db.get(socket.roomId).get("messages").value();
        // sending data to client
        io.in(socket.roomId).emit("messages", messages);
    };

    const addMessage = (message) => {
        db.get(socket.roomId).get("messages")
            .push({
                messageId:nanoid(8),
                createdAt:new Date(),
                ...message
            })
            .write();
        // updating data for clients
        getMessages();
    };

    const removeMessage = (messageId) => {
        db.get(socket.roomId).get("messages").remove({messageId}).write();
        // updating data for clients
        getMessages();
    };

    socket.on("message:get", getMessages);
    socket.on("message:add", addMessage);
    socket.on("message:remove", removeMessage);
};
