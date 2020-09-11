const Cart = require("../../models/Cart");
const { verifyToken } = require("../../security/tokenHelper")
const carts = (app) => {
  app.post('/carts', verifyToken, async (req, res) => {
    const { userId, name, price } = req.body;
    try {
      await Cart({ userId, name, price }).save()
      res.send(201)
    } catch (e) {
      console.log(e)
    }
  })

  app.get('/carts/:userId', verifyToken, async (req, res) => {
    const userId = req.params.userId;
    try {
      console.log(userId)
      const carts = await Cart.find({ userId: userId })
      res.send(carts)
    } catch (e) {
      console.log(e)
    }
  })
}


module.exports = { carts }



