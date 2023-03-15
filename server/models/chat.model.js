const mongoose = require("mongoose");

const Chat = mongoose.model("Chat", new mongoose.Schema({
    chatname: String,
    participants:[Hiсв],
    moderator: {
        type: mongoose.Schema.Type.ObjectId,
        ref: "User"
    }
}))

module.export = Chat;
