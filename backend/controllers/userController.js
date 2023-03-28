const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const { genSalt } = require("bcrypt");

// @desc Register new User
// @route POST/api/users
// @acess Public

const registerUser = asyncHandler( async(req,res)=>{
    const{name,email,password} = req.body;

    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please add all fields");
    }

    const userExists = await User.findOne({email});
    if(userExists){
        res.status(401);
        throw new Error("User already exists");
    }else{

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const user = await User.create({
            name,
            email,
            password:hashedPassword
        })

        if(user){
            res.status(201).json({
                _id:user.id,
                name:user.name,
                email:user.email
            });

        }else{
            res.status(400);
            throw new Error("Invalid data");
        }
    }
})



module.exports = {registerUser};