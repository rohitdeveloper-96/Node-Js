import mongoose from "mongoose";

const buildingProducts = mongoose.Schema({
    product_ref : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Products'
    },
    category_ref : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    products_name : {
        type:String,
        required:false
    },
    quantity : {
        type:Number,
        required:true
    },
    total : {
        type:Number,
        required:false
    },
   
})

export const BuildingProducts = mongoose.model("newbuildingproducts",buildingProducts)