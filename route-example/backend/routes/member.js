
const member = (app) => {
  app.get('/member', (req, res) => {
    res.send("hello word")
  })

}


module.exports = { member }




