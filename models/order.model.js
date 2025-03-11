const mongoose = require('mongoose')
const { ordersConnection } = require("../dbConnections/mongoDB.connection.js")

const order = () => {
  const orderSchema = new mongoose.Schema({
      subtotal: {
        type: Number,
        required: true
      },
      service_fee: {
          type: Number,
          required: true
      },
      tax: {
          type: Number,
          required: true
      },
      total_amount: {
          type: Number,
          required: true
      },
      address: {
        type: String,
        required: true
      },
      phone_number: {
        type: String,
        required: true
      },
      order_date: {
        type: Date,
        required: true,
        default: Date.now
    },
    customer_name: {
        type: String,
        required: true
    },
    customer_id: {
      type: String,
      required: true
    },
    delivered: {
      type: Boolean,
      required: true,
      default: false
    },
    cart_summary: [{
        item: {
          type: String,
          required: true
        },
        quantity: {
          type: Number,
          required: true
        },
        price: {
          type: Number,
          required: true
        }
      }]
    })
    return ordersConnection.model('order', orderSchema)
  }
  module.exports = order