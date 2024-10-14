const router = require("express").Router();

const {createUser, getUsers,getSingleUser,deleteUser,login}=  require("../../controllers/userController")

console.log("here in the user routes")

// const {authMiddleware} = require("../../utils/auth")

router.route('/').get(getUsers).post(createUser)

router.route('/login').post(login)

router.route("/:id").get(getSingleUser).delete(deleteUser)

module.exports =router