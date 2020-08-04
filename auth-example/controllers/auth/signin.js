const User = require("../../models/User");
const { comparePassword } = require('../../security/passwordHelper')
const { createToken } = require("../../security/tokenHelper")

const signIn = (app) => {
  app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (user) {
        const isCheckPass = await comparePassword(password, email);
        const token = await createToken(user.id, user.email);
        if (isCheckPass) {
          return res.json({ token });
        }
        if (!isCheckPass) {
          return res.json({ error: "password or email exists" });
        }
      } else {
        return res.json({ error: "user does not exist" });
      }
    } catch (err) {
      res.send(500)
    }

  })
}

module.exports = { signIn } 