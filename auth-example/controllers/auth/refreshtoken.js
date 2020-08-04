const User = require("../../models/User");
const { comparePassword } = require('../../security/passwordHelper')
const { createToken } = require("../../security/tokenHelper")

const refreshToken = (app) => {
  app.get('/refreshtoken/:id', async (req, res) => {
    const { id } = req.params;

    try {
      const user = await User.findOne({ _id: id });
      if (user) {
        const token = await createToken(user.id, user.email);
        return res.json({ token });
      }
    } catch (err) {
      console.log(err)
      res.send(500)
    }

  })
}

module.exports = { refreshToken } 