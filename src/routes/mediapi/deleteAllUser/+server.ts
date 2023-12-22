import { connect } from '$lib/db/connect';
import User from '$lib/model/users';
import { json } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import type { RequestEvent } from './$types';
import { JWT_SECRET } from '$env/static/private';
connect();

export async function GET({ request, cookies }: RequestEvent) {
	const token = cookies.get('token');

	const { id } = jwt.verify(token, JWT_SECRET);

	const isAdmin = await User.findOne({ _id: id });
	if (!isAdmin.admin) {
		return json({ msg: 'admin only action', success: false }, { status: 400 });
	}

	const deleteAll = await User.deleteMany({
		_id: { $ne: id }
	});
	return json({ msg: `all ${deleteAll.deletedCount} users deleted` }, { status: 200 });
}
