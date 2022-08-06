const User = require('../models/userModel')


// login user
const loginUser = async (req, res) => {
    res.json({ mssg: 'Log in user'})
}

// signup user
const signupUser = async (req, res) => {
    res.json({ mssg: 'Sign up user'})
}

module.exports = { loginUser, signupUser }