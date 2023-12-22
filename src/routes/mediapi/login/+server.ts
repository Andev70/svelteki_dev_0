import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';
import User from '$lib/model/users';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { JWT_SECRET } from '$env/static/private';

export async function POST({ request, cookies }: RequestEvent) {
	const body: any = await request.json();
	const { email, password } = body;

	if (!email && !password) {
		return json({ success: false, msg: 'please provide credentials' }, { status: 400 });
	}

	if (!email) {
		return json({ success: false, msg: 'please enter your email address' }, { status: 400 });
	}

	if (!password) {
		return json({ success: false, msg: 'please enter your password' }, { status: 400 });
	}
	const ifNotRegistered = await User.findOne({ email });

	if (!ifNotRegistered) {
		return json({ success: false, msg: 'no user found please register' }, { status: 404 });
	}

	const comparePassword = bcrypt.compareSync(password, ifNotRegistered.password);
	if (!comparePassword) {
		return json({ success: false, msg: 'incorrect password' }, { status: 404 });
	}
	const { admin } = ifNotRegistered;
	const secretToken = jwt.sign({ id: ifNotRegistered._id, admin }, JWT_SECRET, {
		expiresIn: '30d'
	});

	cookies.set('token', secretToken, { path: '/' });
	return json({ success: true }, { status: 200 });
}
