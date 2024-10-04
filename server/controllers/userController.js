const { User } = require('../models')

const { signToken } = require('../utils/auth')


module.exports = {
    async createUser(req, res) {
      try {
        // Validate input
        if (!req.body.email || !req.body.password || !req.body.name) {
          return res.status(400).json({ message: 'All fields are required' });
        }
  
        const newUser = await User.create(req.body);
        const token = signToken(newUser);
        
        res.status(200).json({
          token,
          user: {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email
          }
        });
      } catch (err) {
        console.error(err);
        // Send more specific error messages
        if (err.name === 'ValidationError') {
          return res.status(400).json({ message: 'Invalid user data provided' });
        }
        if (err.code === 11000) {
          return res.status(400).json({ message: 'Email already exists' });
        }
        res.status(500).json({ message: 'Server error occurred' });
      }
    }
  };