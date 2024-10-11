const router = require('express').Router()
const {startChat, receiveDirectChats, allChats} = require('../../controllers/chatController')


router.route('/').get(allChats).post(startChat);
router.get('/:senderId/:receiverId', receiveDirectChats);


module.exports = router;