import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';
import Todo from '$lib/model/todos';
import { decode } from 'punycode';
import { connect } from '$lib/db/connect';
import lodashArray from 'lodash/array';
connect();
export async function GET({ cookies }: RequestEvent) {
	try {
		const token = cookies.get('token');
		if (!token) {
			return json({ msg: 'authentication failed', success: false }, { status: 401 });
		}
		const { id } = jwt.verify(token, JWT_SECRET);

		if (!id) {
			return json({ msg: 'authentication failed', success: false }, { status: 401 });
		}
		const getTodos = await Todo.find({ userId: id });
		if (!getTodos) {
			return json({ msg: 'internal error', success: false }, { status: 500 });
		}
		const todos = lodashArray.reverse(getTodos);

		return json({ msg: 'all todos set', success: true, todos }, { status: 500 });
	} catch (e) {
		console.log(e);
		return json({ msg: 'internal error', success: false }, { status: 500 });
	}
}
