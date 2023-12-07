require('dotenv').config();
const mongoose=require('mongoose');
const express=require('express');
const app=express();
const router=require('./routes/task');
const notFound=require('./routes/not-found');
const customErrorHandler=require('./errors/customErrorHandler')



//middleware:
app.use(express.json()) // change request into json
app.use('/', router) // working route;
app.use(customErrorHandler) // custom error handler;
app.use(notFound) // not found route;


start();
async function  start(){
    const url=process.env.MONGO_DB;
    await mongoose.connect(url);
    console.log('connected mongo_db successfully !!');
    const port=process.env.PORT||3000
    app.listen(port,()=>{
        console.log(`app listen port: ${port} ...`)
    })
}

