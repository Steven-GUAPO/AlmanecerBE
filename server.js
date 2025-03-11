const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const PORT = process.env.PORT || 3000;

const registerRouter = require('./routes/register.route.js')
app.use('/user', registerRouter)

const menuapiRouter = require('./routes/menu.route.js')
app.use('/menuitems', menuapiRouter);

const orderRouter = require('./routes/order.route.js')
app.use('/orders', orderRouter);

app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`))