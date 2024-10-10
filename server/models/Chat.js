// models/messages.js
const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  senderId: String,
  receiverId: String,
  content: String,
  createdAt: Date
}, { timestamps: true });

const Chat= mongoose.model('Chat', chatSchema);

module.exports = Chat;