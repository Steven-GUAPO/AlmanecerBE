const express = require('express')
const { loginUser, registerUser, getUser, getAllUsers } = require('../controllers/user.controller.js')
const router = express.Router()

//get all
router.get('/', getAllUsers)

// Getting One
router.get('/:id', getUser, (req, res) => {
  res.json(res.user)
})

//find and check one
router.post('/login', loginUser)

//create one
router.post('/', registerUser)

  // async function getUser(req, res, next) {
  //   let user
  //   try {
  //     user = await User.findById(req.params.id)
  //     // console.log(user)
  //     if (user == null) {
  //       return res.status(404).json({ message: 'Cannot find user' })
  //     }
  //   } catch (err) {
  //     return res.status(500).json({ message: err.message })
  //   }
  
  //   res.user = user
  //   next()
  // }

module.exports = router