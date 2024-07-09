const db = require('../models')
const bcypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const User = db.users

require('dotenv').config();

console.log("user controller"+process.env.API_SECRET)

// Register

const registerUser = async (req, res) => {
    try {
        let data = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password

        }
        data.password = bcypt.hashSync(data.password, 8)
        let user = await User.create(data);
        res.status(200).send(user)

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}


// login

const loginUser = async (req, res) => {
    try {
        let data = {
            email: req.body.email,
            password: req.body.password
        }

        let user = await User.findOne({ where: { email: data.email } });
        if (!user) return res.status(400).json({ error: 'User not found!' })


        let isValidPassword = bcypt.compareSync(data.password, user.password)
        if (!isValidPassword) return res.status(400).json({ error: "Incorrect password!" })

            // console.log(process.env.API_SECRET)

        let token = jwt.sign({ id: user.id }, process.env.API_SECRET, { expiresIn: 86400 })
        res.status(200).json({User:{id:user.id}, message:'Login Successful', token:token})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    registerUser,
    loginUser
}