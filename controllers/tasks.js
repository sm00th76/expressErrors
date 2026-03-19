const Tasks = require('../mongo_db/models.js')

const middlewares = require('../middleware/asyncWrapper.js')

const {createError}= require('../middleware/error-handler.js')

const task_get = middlewares.asyncWrapper(async (req,res)=>{
		const doc = await Tasks.find()
		res.status(200).json(doc)
		res.send(500).send(msg)
})

const task_create = async (req,res)=>{
	const doc = await Tasks.create(req.body)
	res.status(201).json( doc )
}

const task_get_one = middlewares.asyncWrapper(async (req,res) =>{
	const { id:taskId } = req.params

	const doc = await Tasks.where({_id : taskId}).findOne()

	if (!doc) return next(createError('resource not found',404))
	
	res.status(200).json( doc )
})

const task_delete = middlewares.asyncWrapper(async (req,res,next)=>{
	const {id:taskId} =req.params
	const doc = await Tasks.findOneAndDelete({_id:taskId})
	if(!doc) return next(createError('resource not found',404))
	res.status(200).send({doc})
})

const task_update = middlewares.asyncWrapper(async (req,res)=>{
	const { id } = req.params
	const doc = await Tasks.findOneAndUpdate({_id:id},req.body,{
    new: true,
    runValidators: false,
  })
  	if(!doc) return next(createError('resource not found',404))
	res.status(200).json( { doc } )
})

module.exports = { 
	task_get,
	task_create,
	task_get_one,
	task_delete,
	task_update,
}
