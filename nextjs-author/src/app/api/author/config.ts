import  mongoose from "mongoose";

const connectDb=()=>{
     mongoose.connect(process.env.MONGODB_URI||"").then(()=>{
        console.log("connected");
        
     }).catch((err:Error)=>{
        console.log("failed"+err);
        
     })
}

export default connectDb

