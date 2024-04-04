const mongoose = require("mongoose");

const loginSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please add the user name"],
    },
    password: {
      type: String,
      required: [true, "please add the user password"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("User", loginSchema);
