const asyncHandler = require('express-async-handler');
const Task = require('../model/taskModels');
const User = require('../model/userModel');

// @desc Get Todo Tasks
// @route GET /api/goals
// @access   Private
const getTasks = asyncHandler(async (req, res) => {
	const tasks = await Task.find({ user: req.user.id });

	res.status(200).json(tasks);
});

// @desc Set Todo Tasks
// @route POST /api/goals
// @access   Private
const createTask = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error('Please add a text field');
	}

	const task = await Task.create({
		task: req.body.text,
		user: req.user.id,
	});
	res.status(200).json(task);
});

// @desc Update Todo Tasks
// @route Put /api/goals/:id
// @access   Private
const updateTask = asyncHandler(async (req, res) => {
	const task = await Task.findById(req.params.id);
	//if task with matching id not found
	if (!task) {
		res.status(400);
		throw new Error('Task not found');
	}

	const user = await User.findById(req.user.id);
	//check for user
	if (!user) {
		res.status(401);
		throw new Error('User not found');
	}
	//Make sure the logged in user matches the task user
	if (task.user.toString() !== user.id) {
		res.status(401);
		throw new Error('User not authorised');
	}

	const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});

	res.status(200).json(updatedTask);
});

// @desc Delete Todo Tasks
// @route DELETE /api/goals/:id
// @access   Private
const deleteTask = asyncHandler(async (req, res) => {
	const task = await Task.findById(req.params.id);
	//if task with matching id not found
	if (!task) {
		res.status(400);
		throw new Error('Task not found');
	}
	const user = await User.findById(req.user.id);
	//check for user
	if (!user) {
		res.status(401);
		throw new Error('User not found');
	}
	//Make sure the logged in user matches the task user
	if (task.user.toString() !== user.id) {
		res.status(401);
		throw new Error('User not authorised');
	}
	await Task.remove();

	res.status(200).json({ id: req.params.id });
});
module.exports = {
	getTasks,
	createTask,
	updateTask,
	deleteTask,
};
