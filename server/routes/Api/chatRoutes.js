const router = require('express').Router()
const {startChat, receiveDirectChats, allChats} = require('../../controllers/chatController')
//const {fetchMessages, fetchDirectMessages, sendMessage, deleteMessage} = require('..')

router.route('/').get(allChats).post(startChat);
router.get('/:senderId/:receiverId', receiveDirectChats);
//router.route('/')


module.exports = router;