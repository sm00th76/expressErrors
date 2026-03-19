const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
	name : {
		type:String,
		required:[true,"name is required"],
		trim :true,
		maxlength:[30,'cannot exceed 30 characters']
	},
	completed : {
		type : Boolean,
		default :false
	}	
})

module.exports = mongoose.model("Tasks",taskSchema)
