const router = require('express').Router()

const userRouter = require('./userRoutes')
const chatRouter = require('./chatRoutes')
console.log("here inner index")
router.use('/users', userRouter);
router.use('/chat', chatRouter);

module.exports = router;
