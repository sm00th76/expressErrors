const {customHandler,createError} = require('../error_class/classError.js')

const customErrHandler = (err,req,res,next) =>
{
    if(err instanceof customHandler) return res.status(err.statusCode).json({msg:err.message})
    //else if (err.name === 'CastError') return res.status(400).json(err)
    //return res.status(500).json({"msg":"something went wrong"})
    return res.status(500).json(err)
}
module.exports = {customErrHandler,createError}