const { User } = require('../models')

const { signToken } = require('../utils/auth')

console.log('here in the user controller')


module.exports = {


    
    async createUser(req, res){
        try {
        const newUser = await User.create(req.body)
        const token = signToken(newUser)
        res.status(200).json({token, newUser}) 
        } catch (err) {
            console.error(err)
         res.status(500).json(err)   
        }
    
    },


    async getUsers(req,res){
        console.log('can i do this shit')
        try {
            const allUsers = await User.find()
            res.status(200).json(allUsers)
        } catch (err) {
            console.error(err)
            res.status(500).json({message:err})
            
        }
    },

    async getSingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
          $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
        });
    
        if (!foundUser) {
          return res.status(400).json({ message: 'Cannot find a user with this id!' });
        }
    
        res.json(foundUser);
      },

      async login({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
        if (!user) {
          return res.status(400).json({ message: "Can't find this user" });
        }
    
        const correctPw = await user.isCorrectPassword(body.password);
    
        if (!correctPw) {
          return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
      },
}