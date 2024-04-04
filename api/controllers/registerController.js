const asyncHandler = require("express-async-handler");
const Reguser = require("../model/registerModel");
const bcrypt = require("bcrypt");

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password,phone } = req.body;
    if (!username || !email || !password || !phone ) {
      res.status(400);
      throw new Error("All Fields are mandetory");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      res.status(400);
      throw new Error("User Already Registered");
    }
  
    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password", hashedPassword);
    const user = await Reguser.create({
      username,
      password: hashedPassword,
      email,
      phone,
    });
    console.log(`User created ${user}`);
  
    if (user) {
      res.status(201).json({
        _id: user.id,
        email: user.email,
        phone: user.phone,
      });
    } else {
      res.status(400);
      throw new Error("User data is  not valid");
    }
    res.json({ message: "Register the user" });
  });

  module.exports = { registerUser };