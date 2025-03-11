const mongoose = require('mongoose')
const { userConnection } = require("../dbConnections/mongoDB.connection.js")

const user = () => {
  const userSchema = new mongoose.Schema({
      first_name: {
        type: String,
        required: true
      },
      last_name: {
          type: String,
          required: true
      },
      token: {
          type: String,
          required: false
      },
      email_id: {
          type: String,
          required: true
      },
      phone_number: {
        type: String,
        required: true
      },
      creation_date: {
        type: Date,
        required: true,
        default: Date.now
      },
      password: {
        type: String,
        required: true
    },
    });

    // Automatically remove password from JSON responses
    userSchema.set('toJSON', {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      }
    });
    return userConnection.model('user', userSchema)
  }
  module.exports = user