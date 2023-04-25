const { User } = require('../models')

module.exports = {
  async register (req, res) {
    try {
    //   res.send(req.body)
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: `(${err})This email account is already in use.`
      })
    }
    // res.send({
    //   message: `Hello ${req.body.email}! Your user was registered! HaveFun!`
    // })
  }
}
