class customAPIError extends Error{
    constructor(message,status){
        super(message);
        this.status=status
    }
}

function createCustomAPIError(message,status){
    return new customAPIError(message,status);
}

module.exports={customAPIError,createCustomAPIError}