const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
  
    fullname:String,
    birthdate:String,
    Genre:String,
    Gender:String,
 
  },
  { collection: "Users", timestamps: true }
);

const User = mongoose.model("Users", userSchema);

module.exports = User;