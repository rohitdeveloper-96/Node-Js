import express from 'express';
import { Products } from "./productsModel.js"; 

const ProductsRouter = express.Router();

//post
ProductsRouter.post('/add/',async(req,res)=>{
    console.log(req.body)
    const new_products = new Products(req.body)
    await new_products.save() //to save in mongo
    res.json('json added')
})

  //get
  ProductsRouter.get('/all/',async(req,res)=>{
    const productsList = await Category.find({}) //to read all data collection in Mongo
    res.json(productsList)
})

export default ProductsRouter;
