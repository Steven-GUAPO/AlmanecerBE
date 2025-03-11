const express = require('express')
const { getMenuItems } = require('../controllers/menu.controller.js')
const router = express.Router()

//get all
router.get('/', getMenuItems)

  module.exports = router