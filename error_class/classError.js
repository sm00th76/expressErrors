class customHandler extends Error{
    constructor(msg,statusCode){
        super(msg)
        console.log('in custom class')
        this.statusCode = statusCode
    }
}

const createError = (msg ,code) =>{
    console.log('creted error obj')
    return new customHandler(msg,code)
}


module.exports = {customHandler,createError}