import mongoose from 'mongoose';

export async function connect() {
	try {
		mongoose.connect(
			'mongodb+srv://simpledev:simple1234@cluster0.k3hjvqo.mongodb.net/socialmedia?retryWrites=true&w=majority'
		);
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
