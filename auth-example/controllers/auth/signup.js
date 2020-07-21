const User = require("../../models/User");
const { hashPassword } = require('../../security/passwordHelper')
const { createToken } = require("../../security/tokenHelper")


const signup = (app) => {
  app.post('/signup', async (req, res) => {
    const { email, password, name } = req.body;

    try {
      const hashedPassword = await hashPassword(password)
      const user = await new User({
        email,
        hashedPassword,
        name
      }).save()
      const token = await createToken(user.id, user.email);
      res.json({ token })
    } catch (err) {
      console.log(err)
      res.send(500).json(err)
    }

  })
}

module.exports = { signup } 