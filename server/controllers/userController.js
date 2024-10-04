const { User } = require('../models')

const { signToken } = require('../utils/auth')




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
    
    }
}