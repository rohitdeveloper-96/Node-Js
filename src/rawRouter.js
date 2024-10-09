import express from 'express';
import { Raw } from "./rawModel.js"; 

const RawRouter = express.Router()
//get
RawRouter.get('/all/',async(req,res)=>{
    const all_material = await Raw.find({}) //to read all data collection in Mongo
    res.json(all_material)
})
//getById
RawRouter.get('/data/:id',async(req,res)=>{
    const {id}  = req.params;
    const raw_material = await Raw.findById(id) //to read data collection in Mongo
    res.json(raw_material)
})
//post
RawRouter.post('/add/',async(req,res)=>{
    console.log(req.body)
    const new_material = new Raw(req.body)
    await new_material.save() //to save in mongo
    res.json('json added')
})
//update
RawRouter.patch('/update/:id',async(req,res)=>{
    const {id} = req.params;
    console.log(id,"id")
   await Raw.findByIdAndUpdate(id,req.body)

    res.json('json updated')
})
//Delete
RawRouter.delete('/delete/:id',async(req,res)=>{
    const {id} = req.params;
    console.log(id,"id")
   await Raw.findByIdAndDelete(id)

    res.json('json Deleted')
})

export default RawRouter;

