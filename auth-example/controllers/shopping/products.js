const Products = require("../../models/products");

const products = (app) => {
  app.get('/products', async (req, res) => {
    try {
      const products = await Products.find();
      res.send(products)
    } catch (e) {
      console.log(e)
    }
  })
}

module.exports = { products } 