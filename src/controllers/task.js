 const {createCustomAPIError}=require('../errors/customAPIError');
 const Task=require('./models/task');
 const asyncWrapper=require('../helpers/asyncWrapper')

 const find=asyncWrapper(async (req,res,next)=>{
   const data=await Task.find({})
   res.status(200).json({success:true,data:data})
 })

 const create=asyncWrapper(async (req,res,next)=>{
  const body=req.body;
  const newTask= await Task.create(body);
  res.status(201).json({success:true,data:newTask})
 })

 const findOne=asyncWrapper(async (req,res,next)=>{
    const id=req.params['id'];
    const data=await Task.findOne({_id:id});
    if(!data){
      return next(createCustomAPIError(`task by id ${id} not found`,404))
    }
    res.status(200).json({success:true,data:data})
 })

 const update=asyncWrapper(async (req,res,next)=>{
   const id=req.params['id'];
   const body=req.body;
   const data=await Task.findByIdAndUpdate({_id:id},body,{new:true,runValidators:true});
   if(!data){
    return next(createCustomAPIError(`task by id ${id} not found`,404))
   }
   res.status(200).json({success:true,data:data});
 });

const deleteTask=asyncWrapper(async (req,res,next)=>{
  const id=req.params['id'];
  const data=await Task.findByIdAndDelete({_id:id});
  if(!data){
   return next(createCustomAPIError(`task by id ${id} not found`,404))
  }
  res.status(200).json({success:true,data:data});
});

 module.exports={find,create,findOne,update,deleteTask}