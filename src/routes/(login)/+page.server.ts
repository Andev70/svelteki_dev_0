import { JWT_SECRET } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
export async function load({ cookies }: any) {
	const token = cookies.get('token');
	if (token) {
		const verified = jwt.verify(token, JWT_SECRET);
		if (verified) {
			throw redirect(302, '/dashboard');
		}
	}
}

export const actions = {
	default: async ({ fetch, request }: RequestEvent) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		if (!password || !email) {
			return fail(400, { msg: 'empty fields please fill the form', error: true, email });
		}
		const res = await fetch('/mediapi/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		});
		const newRes = await res.json();

		return { response: newRes };
	}
};
