import  mongoose, { Schema } from "mongoose";
const authorSchema=new mongoose.Schema({
    fullname:String,
    birthdate:Number,
    Genre:String,
    Gender:String
    
},
{ collection: "Users", timestamps: false }
)
const User = mongoose.models.Users || mongoose.model("Users", authorSchema);

export default User;