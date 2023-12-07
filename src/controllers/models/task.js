const mongoose=require('mongoose')
const schema = new mongoose.Schema({
     title: {
        type:String,
        unique:true,
        required:true,
        trim:true,       
        minLength:2,
        maxLength:200,
     }, 
     completed:{
       type:Boolean,
       required:true,   
       default:false     
     }
     },{
      timestamps: true
     });
const Task = mongoose.model('Task', schema);

module.exports=Task