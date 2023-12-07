const{customAPIError}=require('./customAPIError')

function customErrorHandler(err,req,res,next){
    if(err instanceof customAPIError){
      res.status(err.status).json({message:err.message});
      return
    }
    res.status(500).json({message:err.message});
}

module.exports=customErrorHandler