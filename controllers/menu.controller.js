const menuItem = require('../models/menu.model.js')
const MenuItem = menuItem();

const getMenuItems = async (req, res) => {
    try {
      const menuitems = await MenuItem.find()
      res.json(menuitems)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }

  module.exports = {
    getMenuItems
  }