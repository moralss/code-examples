const User = require("../../models/User");
const { comparePassword } = require('../../security/passwordHelper')
const { createToken } = require("../../security/tokenHelper")

const signIn = (app) => {
  app.post('/signin', async (req, res) => {
    const { email, password, name } = req.body;

    try {
      const isCheckPass = await comparePassword(password, email);
      const user = await User.findOne({ email });
      console.log(isCheckPass)
      const token = await createToken(user.id, user.email);
      if (isCheckPass) {
        return res.json({ token });
      }
      else {
        return res.send(400);
      }
    } catch (err) {
      console.log(err)
      res.send(500).json(err)
    }

  })
}

module.exports = { signIn } 