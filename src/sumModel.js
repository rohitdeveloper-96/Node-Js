import mongoose from "mongoose";

const SumOfNumbers = mongoose.Schema({
    num1 : Number,
    num2  : Number,
    sum : Number,
})

export const Sum = mongoose.model("Sum",SumOfNumbers)