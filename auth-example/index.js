const express = require("express");
const app = express();
var port = 3003
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config();
const { signup } = require("./controllers/auth/signup");
const { signIn } = require("./controllers/auth/signin")
const cors = require("cors");

app.use(cors())
app.use(bodyParser.json())
signup(app)
signIn(app)


mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true, useUnifiedTopology: true }).
  then(res => console.log("connected")).catch(err => console.log(err))

// listen to requests
app.listen(port, () => console.log(`server started on port ${port} `));
