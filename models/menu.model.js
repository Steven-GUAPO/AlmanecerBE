const mongoose = require('mongoose');
const { menuItemsConnection } = require("../dbConnections/mongoDB.connection.js");

const menuItem = () => {
    const menuItemSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    discount_percent: {
        type: Number,
        default: 0
    },
    image_url: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String], // Array of strings
        required: true
    },
    item: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    ratings: [
        {
        user: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        }
        }
    ],
    category: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    }
    });
    return menuItemsConnection.model('menuitem', menuItemSchema);
}
module.exports = menuItem;
