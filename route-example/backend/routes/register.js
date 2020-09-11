const Member = require("../models/members");
const { hashPassword } = require('../security/passwordHelper')
const { createToken } = require("../security/tokenHelper");
const register = (app) => {

  app.post("/register", async (req, res) => {
    const { name, password, email } = req.body;
    try {
      console.log(name, password, email)
      const hashedPassword = await hashPassword(password);
      const member = await new Member({ name, email, hashedPassword }).save()
      const token = createToken(member._id, member.email);
      res.send({ token })
    } catch (e) {
      console.log(e)
    }
  })
}



module.exports = { register }