import { connect } from '$lib/db/connect';
import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';
import Todo from '$lib/model/todos';

connect();

export async function POST({ request, cookies }: RequestEvent) {
	try {
		const { id } = await request.json();
		const token = cookies.get('token');
		if (!id || !token) {
			return json({ msg: 'authentication failed', success: false }, { status: 401 });
		}

		const delOne: any = await Todo.findByIdAndDelete(id);
		if (!delOne) {
			return json({ msg: 'internal error', success: false }, { status: 500 });
		}
		return json({ msg: `${delOne.title} deleted successfully`, success: true }, { status: 200 });
	} catch (e) {
		console.log(e);
		return json({ msg: 'internal error', success: false }, { status: 500 });
	}
}
