import { json } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { connect } from '$lib/db/connect';
import { JWT_SECRET } from '$env/static/private';
import Todo from '$lib/model/todos';
connect();
export async function POST({ request, cookies }: any) {
	try {
		const body = await request.json();
		if (!body.title) {
			return json({ msg: 'empty fields', success: false }, { status: 401 });
		}
		const token = cookies.get('token');
		if (!token) {
			return json({ msg: 'empty fields', success: false }, { status: 401 });
		}
		const { id } = jwt.verify(token, JWT_SECRET);

		if (!id) {
			return json({ msg: 'authentication failed', success: false }, { status: 401 });
		}
		const todo = await Todo.create({
			userId: id,
			title: body.title
		});
		if (!todo) {
			if (!token) {
				return json({ msg: 'something went wrong', success: false }, { status: 500 });
			}
		}
		return json({ msg: 'todo created successfully', success: true }, { status: 201 });
	} catch (e: any) {
		console.log(e);
		return json(
			{ msg: 'internal error or duplicate todo title ', success: false },
			{ status: 500 }
		);
	}
}
