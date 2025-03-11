const user = require('../models/user.model')
const bcrypt = require('bcryptjs')
const User = user();

async function getUser(req, res, next) {
    let user
    try {
      user = await User.findById(req.params.id)
      // console.log(user)
      if (user == null) {
        return res.status(404).json({ message: 'Cannot find user' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.user = user
    next()
  }

  const loginUser = async (req,res) =>{
        const { email_id, password } = req.body;
        try{
        const user = await User.findOne({ email_id : email_id});
        if (!user) {
            return res.status(400).json({ message: 'Invalid email' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
        }
        return res.status(200).json(user);
        } catch {
        return res.status(500).json({ message: 'Server error' });
        }
  }

  const registerUser = async (req, res) => {

        // Check if user already exists
        const existingUser = await User.findOne({ email_id: req.body.email_id });
        if (existingUser) {
        return res.status(400).json({ message: 'email id already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_number: req.body.phone_number,
            email_id: req.body.email_id,
            password: hashedPassword
        })
        try {
            const newUser= await user.save()
            res.status(201).json(newUser)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }

    const getAllUsers = async (req, res) => {
        try {
          const users = await User.find()
          res.json(users)
        } catch (err) {
          res.status(500).json({ message: err.message })
        }
      }

  module.exports = {
    getUser,
    loginUser,
    registerUser,
    getAllUsers
  }