

const mongoose =require("mongoose")
const Productschema=mongoose.Schema(
    {
        id:Number,
        image:String,
        text:String,
        raiting:String
    }
)
module.exports=mongoose.model("Product",Productschema)