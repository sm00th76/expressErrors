const express = require('express')

const router = express.Router()

const { 	task_get,
			task_create,
			task_get_one,
			task_delete,
			task_update		} = require('../controllers/tasks.js')

router.route('/').get(task_get).post(task_create)

router.route('/:id').get(task_get_one).delete(task_delete).patch(task_update)

module.exports = router;