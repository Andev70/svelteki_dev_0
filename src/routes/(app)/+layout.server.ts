import { JWT_SECRET } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
export function load({ cookies }: any) {
	const token = cookies.get('token');
	if (!token) {
		throw redirect(302, '/');
	}
	const verified = jwt.verify(token, JWT_SECRET);
	if (!verified) {
		throw redirect(302, '/');
	}
}
