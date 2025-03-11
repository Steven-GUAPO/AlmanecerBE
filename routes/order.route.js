const express = require('express')
const { makeAnOrder, getAllOrdersForUser } = require('../controllers/order.controller.js')
const router = express.Router()

//create one
router.post('/', makeAnOrder)

router.get('/:id', getAllOrdersForUser)

module.exports = router