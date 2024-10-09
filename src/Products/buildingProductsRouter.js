import express from 'express';
import { BuildingProducts } from "./buildingProductsModel.js";
import { Products } from './productsModel.js';
import { Category } from '../Category/categoryModel.js';
const BuildingProductsRouter = express.Router();

//post
BuildingProductsRouter.post('/add/',async(req,res)=>{
    console.log(req.body)
    const data = req.body;
    const product_data = await Products.findById(data.product_ref)
    const category_data = await Category.findById(data.category_ref)
    console.log(category_data,"=====>")
    const total = product_data.price * data.quantity;
    data.total = total
    const new_products = new BuildingProducts(data)
    await new_products.save() //to save in mongo
    res.json('json added')
})
BuildingProductsRouter.get('/all/',async(req,res)=>{
    const all_material = await BuildingProducts.find({}) //to read all data collection in Mongo
    res.json(all_material)
})
export default BuildingProductsRouter;
