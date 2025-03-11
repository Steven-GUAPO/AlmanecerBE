require('dotenv').config()
const mongoose = require('mongoose')

// connection for user database
mongoose.connect(process.env.USERS_DB_URL)
const userConnection = mongoose.connection
    userConnection.on('error', (error) => console.error(error))
    userConnection.once('open', () => console.log('connected to db'))

// Separate connection for menuitems database
const menuItemsConnection = mongoose.createConnection(process.env.MENUITEMS_DB_URL);
  
    menuItemsConnection.on('error', (error) => console.error('MenuItems DB Connection Error:', error));
    menuItemsConnection.once('open', () => console.log('Connected to MenuItems DB'));

// Separate connection for orders database
const ordersConnection = mongoose.createConnection(process.env.ORDERS_DB_URL);
    ordersConnection.on('error', (error) => console.error('Orders DB Connection Error:', error));
    ordersConnection.once('open', () => console.log('Connected to Orders DB'));

module.exports = {
    userConnection,
    menuItemsConnection,
    ordersConnection
};