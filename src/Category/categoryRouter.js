    import express from 'express';
    import { Category } from "./categoryModel.js"; 

    const CategoryRouter = express.Router();

    //post
    CategoryRouter.post('/add/',async(req,res)=>{
        console.log(req.body)
        const new_category = new Category(req.body)
        await new_category.save() //to save in mongo
        res.json('json added')
    })
    //get
    CategoryRouter.get('/   /',async(req,res)=>{
        const Categorylist = await Category.find({}) //to read all data collection in Mongo
        res.json(Categorylist)
    })

    export default CategoryRouter;
