const User = require("../models/userModel");

const getAllUser = async (req, res) => {
    let allUser = await User.find({});
    res.send(allUser);
  };
  
  const PostUser=async(req,res)=>{
    let findUser=await User.findOne({id:req.body.id})
    if (findUser) {
      res.send("bu idli element var")
    }else{
      const NewUser=new User(req.body
        )
      NewUser.save()
    }
  }
// const deleteUser=async(req,res)=>{
//   let findUser=await User.findByIdAndDelete({id:req.params._id})
//   let deleteId
// }


  module.exports = {
    
    getAllUser,PostUser}