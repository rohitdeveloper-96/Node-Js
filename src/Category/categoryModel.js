import mongoose from "mongoose";

const new_category = mongoose.Schema({
    category_name : String,
})

export const Category = mongoose.model("newCategory",new_category)