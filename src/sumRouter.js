import express from 'express';
import { Sum } from "./sumModel.js"; 

const SumRouter = express.Router()

//post
SumRouter.post('/add/',async(req,res)=>{
    const data = req.body
    const total =  data.num1 + data.num2 
     data.sum = total
     const final = new Sum(data)
     await final.save() //to save in mongo
    res.json('json added')
})
//post
SumRouter.get('/all/',async(req,res)=>{
    const getListTotal = await Sum.find({}) //to read all data collection in Mongo
    res.json(getListTotal)
})
//getById
SumRouter.get('/data/:id',async(req,res)=>{
    const {id}  = req.params;
    const listItem = await Sum.findById(id) //to read data collection in Mongo
    res.json(listItem)
})



export default SumRouter;

