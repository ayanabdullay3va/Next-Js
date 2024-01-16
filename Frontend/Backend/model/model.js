

const mongoose =require("mongoose")
const Productschema=mongoose.Schema(
    {
        id:String,
        name:String,
        price:String,
        category:String
    }
)
module.exports=mongoose.model("Product",Productschema)