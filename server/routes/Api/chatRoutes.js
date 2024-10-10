const router = require('express').Router()
const {startChat, recieveChats} = require('../../controllers/chatController')


router.route('/').get(recieveChats).post(startChat);







module.exports = router;