const router = require('express').Router()
const path = require("path")
const apiRoutes = require('./Api')
console.log("here outer index")
router.use('/api', apiRoutes)


router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  });
  




module.exports = router;