const mongoose = require("mongoose");

const registerSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    username: {
      type: String,
      required: [true, "please add the name"],
    },
    email: {
      type: String,
      required: [true, "please add the email address"],
    },
    phone: {
      type: Number,
      required: [true, "please add the phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Reguser", registerSchema);
