require('dotenv').config()

const express = require('express')

const app = express()

app.use(express.json())

const tasks = require('./routes/tasks.js')

const {routeNotFound} = require('./middleware/route-not-found.js')
const {customErrHandler} = require("./middleware/error-handler.js")
const connectDB = require('./mongo_db/connection.js')

const port = 5000

app.use("/api/v1/tasks",tasks)

app.get('/',(req,res)=>{
	res.send('Welcome!')
})

app.use(routeNotFound)

app.use(customErrHandler)

const connect = async() =>
{
	try{
		await connectDB(process.env.MONGO_URI)
		app.listen(port,()=>{
			console.log(`listening on port ${port} ${process.env.MONGO_URI}`)	
		})
	}
	catch(error){
		console.log(error)
	}
}

connect()