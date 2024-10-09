import mongoose from "mongoose";

const Rawaterial = mongoose.Schema({
    name : String,
    code  : String,
    price : Number,
})

export const Raw = mongoose.model("Raw",Rawaterial)