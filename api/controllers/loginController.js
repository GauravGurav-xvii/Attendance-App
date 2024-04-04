const asyncHandler = require("express-async-handler");
const User = require("../model/loginModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      res.status(400);
      throw new Error("Please provide an Email");
    }
    const user = await User.findOne({ email });
    //compare password with hashedpassword
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            id: user.id,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "7m" }
      );
      res.status(200).json({ accessToken });
    } else {
      res.status(401);
      throw new Error("email or password is not valid");
    }
  }); 

  const currentUser = asyncHandler((req, res) => {
    res.json(req.user);
  });


  module.exports = { loginUser, currentUser };

  