const express = require('express');
const cors = require('cors');
const db = require('./config/connection');
const routes = require('./routes');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json())
if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'../client/dist')))
}
app.use("/", routes)

db.once('open', () => {
  app.listen(PORT,()=>console.log(`app listening on ${PORT}`))

 })
