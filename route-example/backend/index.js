const express = require("express");
const bodyParser = require("body-parser");
const { register } = require("./routes/register");
const { member } = require("./routes/member")
const cors = require("cors");
const app = express();

const port = 3001
const mongoose = require("mongoose")
require('dotenv').config();
app.use(bodyParser())
app.use(cors())
register(app)
member(app)


mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true, useUnifiedTopology: true }).
  then(res => console.log("connected")).catch(err => console.log(err))


app.listen(port, () => {
  console.log(`server running on port ${port}`)
})