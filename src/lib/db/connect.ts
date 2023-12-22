import { DATABASE_URL } from '$env/static/private';
import mongoose from 'mongoose';
export async function connect() {
	try {
		mongoose.connect(DATABASE_URL);

		const connection = mongoose.connection;

		connection.on('connected', () => {
			console.log('MongoDB connected successfully');
		});

		connection.on('error', (err: unknown) => {
			console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
			process.exit();
		});
	} catch (error) {
		console.log('Something goes wrong!');
		console.log(error);
	}
}
