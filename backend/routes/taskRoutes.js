const express = require('express');
const router = express.Router();
const {
	getTasks,
	createTask,
	updateTask,
	deleteTask,
} = require('../controller/taskController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getTasks).post(protect, createTask);
router.route('/:id').put(protect, updateTask).delete(protect, deleteTask);

module.exports = router;
