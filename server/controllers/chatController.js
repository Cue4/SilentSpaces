const {Chat, User} = require('../models/')



module.exports= {

    async startChat(req, res) {
        try {
            const { senderId, receiverId, content } = req.body;
            
            const newMessage = new Chat({
              senderId,
              receiverId,
              content
            });
        
            const savedMessage = await newMessage.save();
            res.status(201).json(savedMessage);
          } catch (err) {
            res.status(500).json(err);
          }
    },

    async recieveChats(req, res) {
        try {
            const { senderId, receiverId } = req.params;
            
            const messages = await Chat.find({
              $or: [
                { senderId: senderId, receiverId: receiverId },
                { senderId: receiverId, receiverId: senderId }
              ]
            }).sort({ createdAt: -1 });
        
            res.status(200).json(messages);
          } catch (err) {
            res.status(500).json(err);
          }
    }
}