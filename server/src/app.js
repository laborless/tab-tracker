const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

// app.get('/register', (req, res) => {
//   res.send({
//     message: 'Hello!'
//   })
// })
// app.post('/register', (req, res) => {
//   res.send({
//     message: `Hello ${req.body.email}! your user was registered! Have fun!`
//   })
// })

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })

// app.listen(process.env.PORT || 8081)
