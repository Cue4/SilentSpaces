const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {

    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            console.log("created user from controllers",newUser)
            const token = signToken(newUser);
            res.status(200).json({ token, newUser });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error creating user', error: err });
        }
    },

    async getUsers(req, res) {
        try {
            const allUsers = await User.find();
            res.status(200).json(allUsers);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error fetching users', error: err });
        }
    },

    async getSingleUser({ user = null, params }, res) {
        try {
            const foundUser = await User.findOne({
                $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
            });

            if (!foundUser) {
                return res.status(400).json({ message: 'Cannot find a user with this ID or username!' });
            }

            res.status(200).json(foundUser);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error fetching user', error: err });
        }
    },

    async login({ body }, res) {
        try {
            const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });

            if (!user) {
                return res.status(400).json({ message: "Can't find this user" });
            }

            const correctPw = await user.isCorrectPassword(body.password);

            if (!correctPw) {
                return res.status(400).json({ message: 'Wrong password!' });
            }

            const token = signToken(user);
            res.status(200).json({ token, user });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error during login', error: err });
        }
        console.log('Sup')
    },

    async deleteUser({params},res){
            try {
                    // find the user to be deleted
                    const user = await User.findByIdAndDelete(params.id); 
                    if (!user) return res.status(404).send('User not found');
                    // send confirmation with details of the deleted user
                    res.status(200).json({
                        message: 'User successfully deleted',
                        deteledUser: user
                    });
                } catch (error) {
                    console.error('Error deleting user:', error);
                    res.status(500).send(error.message);
                }
    }
};

