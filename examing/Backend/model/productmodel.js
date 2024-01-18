const mongoose=require("mongoose")

const ProdSchema=mongoose.Schema({
    name:String,
    text:String,
    raiting:String,

})
module.exports=mongoose.model("Product",ProdSchema)