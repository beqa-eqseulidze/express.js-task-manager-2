const mongoose=require('mongoose')
const schema = new mongoose.Schema({
     title: {
        type:String,
        required:true,
        trim:true,       
        minLength:2,
        maxLength:200,
     }, 
     completed:{
        type:Boolean,
        unique: true,
        required:true,        
     }
     },{
      timestamps: true
     });
const Task = mongoose.model('Task', schema);

module.exports=Task