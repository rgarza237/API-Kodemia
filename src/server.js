// este archivo guardara la definicion 

const express = require('express')
const cors = require('cors')

const kodersRouter = require('./routers/koders')
const usersRouter = require('./routers/users')

const server = express()


// middlewares 
server.use(express.json())
server.use(cors())

// routers
server.use('/users', usersRouter)
server.use('/koders', kodersRouter)
module.exports = server