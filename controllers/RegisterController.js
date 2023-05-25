const User = require("../database/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const RegisterUser = asyncHandler(async ( req, res ) => {
    try{
        const { name, email, password, role, phoneNumber } = req.body;
        if( !name || !email || !password || !role || !phoneNumber ){
            res.status(400);
            throw new Error("All fields are mandatory!");
        }

        // check if user is already registered ---> 
        const userExist = await User.findOne({ email });
        if( userExist ){
            res.status(400);
            throw new Error("User Already Registered.");
        }

        // hashed password --->
        const hashedPass = await bcrypt.hash( password, 10 );
        let user = await User.create({
            name,
            email,
            password : hashedPass,
            role,
            phoneNumber,
        });

         user = await User.findOne({ email });
    // compare password with hashed password --->
    if (await user && (await bcrypt.compare(password, user.password))) {
        const accessToken =  jwt.sign(
            {
              user: {
                name: user.name,
                email: user.email,
                id: user.id,
                role: user.role,
                phoneNumber : user.phoneNumber,
              },
            },
            process.env.JWT_SECRETE,
            { expiresIn: "20m" }
          );
          res.status(200).json({ accessToken, data : { name, email, role } });
        } else {
          res.status(400);
          throw new Error("Email or Password is not valid.");
        }
        // const data = {
        //     name,
        //     email,
        //     role,
        // };
        // res.status(200).json(data);
    }
    catch(err){
        res.status(400).json({
            message : err.message
        });
    }
});

module.exports = { RegisterUser };
