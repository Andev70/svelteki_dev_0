import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, 'Please provide a username'],
			unique: true
		},
		email: {
			type: String,
			required: [true, 'Please provide a email'],
			unique: true
		},
		password: {
			type: String,
			required: [true, 'Please provide a password']
		},
		admin: { type: Boolean, default: false }
	},
	{ timestamps: true }
);

const User = mongoose.models.Webusers || mongoose.model('Webusers', userSchema);

export default User;
