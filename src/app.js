import express,{json,urlencoded} from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import { set,connect } from 'mongoose'
import RawRouter from './rawRouter.js'
import SumRouter from './sumRouter.js'
import CategoryRouter from './Category/categoryRouter.js'
import ProductsRouter from './Products/productsRouter.js'
import BuildingProducts from './Products/buildingProductsRouter.js'
const app =  express()
config()
    app.use(json())
    app.use(urlencoded({extended : true}))
const db = process.env.Mongodb;
set('strictQuery',false)
app.use(cors())
app.use('/raw/material/',RawRouter)
app.use('/sum/calculate/',SumRouter)
app.use('/new/category/',CategoryRouter)
app.use('/new/products/',ProductsRouter)
app.use('/new/buildingproducts/',BuildingProducts)

const start = async()=>{
    await connect(`${db}`)
    app.listen(4000,()=>console.log('server is running ......'))
}

start();