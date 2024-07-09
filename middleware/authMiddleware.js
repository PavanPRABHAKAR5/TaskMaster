const db = require('../models');
const jwt = require('jsonwebtoken')
require('dotenv').config();
// const dotenv = require('dotenv')
// dotenv.config();
// let config = require('../config/dbConfig')

const User = db.users;

// console.log(config)

const verifyToken = async(req,res,next) =>{
        try{
            const token = req.header('Authorization');
            if(!token) return res.status(401).json({error: 'No token, Authorization denied'})
            const decode = jwt.verify(token, process.env.API_SECRET)
            let isUser = await User.findByPk(decode.id);
            if(!isUser) return res.status(401).json({error:'User not found'})
                req.user = isUser
            next()
        }catch(err){
            res.status(400).json({error:"Token is not valid"})
        }
}



module.exports = verifyToken;