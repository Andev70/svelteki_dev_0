import { connect } from '$lib/db/connect';
import bcrypt from 'bcryptjs';
import type { RequestEvent } from './$types';
import { json } from '@sveltejs/kit';
import User from '$lib/model/users';
import { JWT_SECRET } from '$env/static/private';
import jwt from 'jsonwebtoken';

connect();
export async function POST({ request, cookies }: RequestEvent) {
	try {
		const body: any = await request.json();
		const { username, email, password } = body;

		const ifUserPresent = await User.findOne({ email });

		if (ifUserPresent) {
			return json({ success: false, error: 'user is already present', msg: '' }, { status: 401 });
		}

		if (!email && !username && !password) {
			return json({ success: false, error: 'credentials not found', msg: '' }, { status: 401 });
		}
		if (!email) {
			return json({ success: false, error: 'email is  invalid', msg: '' }, { status: 401 });
		}

		if (!password) {
			return json({ success: false, error: 'password is required', msg: '' }, { status: 401 });
		}
		if (!username) {
			return json({ success: false, error: 'username is required', msg: '' }, { status: 401 });
		}
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = bcrypt.hashSync(password, salt);

		const user = await User.create({ email: email, username: username, password: hashedPassword });

		if (!user) {
			json(
				{ success: false, error: 'something went wrong please try again', msg: '' },
				{ status: 500 }
			);
		}
		const secretToken = jwt.sign(
			{ id: user._id, username: user.username, admin: user.admin },
			JWT_SECRET,
			{
				expiresIn: '30d'
			}
		);

		cookies.set('token', secretToken, { path: '/' });
		return json(
			{ success: true, error: '', msg: 'you have been registered successfully' },
			{ status: 201 }
		);
	} catch (e) {
		console.log(e);
		return json({ msg: 'internal error ', success: false }, { status: 500 });
	}
}
