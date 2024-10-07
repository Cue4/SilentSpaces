const router = require('express').Router()

const userRouter = require('./userRoutes')
console.log("here inner index")
router.use('/users', userRouter)

module.exports = router;
