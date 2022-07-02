const mongoose = require('mongoose');

const todoTaskSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
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
