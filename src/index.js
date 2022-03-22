require('dotenv').config()
const { PORT, NODE_ENV } = require('./config/env.config')
const app = require('./app')

app.listen(PORT, (err) => {
    if (err) console.log(err)
    console.log(`Server running on ${PORT} port in ${NODE_ENV} mode!`)
})