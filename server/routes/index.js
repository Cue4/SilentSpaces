const router = require('express').Router()
const path = require("path")
const apiRoutes = require('./Api')
console.log("here outer index")
router.use('/api', apiRoutes)


  
module.exports = router;