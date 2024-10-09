import mongoose from "mongoose";

const products = mongoose.Schema({
    category_ref : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    products_name : {
        type:String,
        required:true
    },
    price : {
        type:Number,
    },
   
})

export const Products = mongoose.model("newproducts",products)