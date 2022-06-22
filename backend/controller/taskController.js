const asyncHandler = require('express-async-handler');

// @desc Get Todo Tasks
// @route GET /api/goals
// @access   Private
const getTasks = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error('Please add a text field');
	}
	res.status(200).json({ message: 'Get TODO Tasks' });
});

// @desc Set Todo Tasks
// @route POST /api/goals
// @access   Private
const setTask = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Set TODO Task' });
});

// @desc Update Todo Tasks
// @route Put /api/goals/:id
// @access   Private
const updateTask = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Update TODO Task ${req.params.id}` });
});

// @desc Delete Todo Tasks
// @route DELETE /api/goals/:id
// @access   Private
const deleteTask = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Delete TODO Task ${req.params.id}` });
});
module.exports = {
	getTasks,
	setTask,
	updateTask,
	deleteTask,
};
