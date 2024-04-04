const mongoose = require("mongoose");

const registerSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "please add the contact email address"],
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

module.exports = mongoose.model("Regusers", registerSchema);
