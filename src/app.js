const express = require('express')
const booksRoutes = require('./routes/books.routes')
const { connectToDB } = require('./config/connect-db.config')
const errorMiddleware = require('./middlewares/error.middleware')

connectToDB()

const app = express()

app.use(express.json())
app.use('/', booksRoutes)
app.use(errorMiddleware)

module.exports = app