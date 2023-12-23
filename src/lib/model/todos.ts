import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
	{
		userId: { type: String, required: [true, 'id needed'] },
		title: {
			type: String,
			required: [true, 'Please provide a username'],
			unique: true
		},
		description: {
			type: String,
			default: ''
		},
		completed: { type: Boolean, default: false },
		admin: { type: Boolean, default: false }
	},
	{ timestamps: true }
);

const Todo = mongoose.models.Todos || mongoose.model('Todos', todoSchema);

export default Todo;
