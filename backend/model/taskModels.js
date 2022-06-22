const mongoose = require('mongoose');

const todoTaskSchema = mongoose.Schema(
	{
		task: {
			type: String,
			required: [true, 'Please add a text value'],
		},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model('Task', todoTaskSchema);
