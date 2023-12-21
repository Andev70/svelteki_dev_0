import { redirect } from '@sveltejs/kit';
import type { RequestEvent } from './$types';
import { fail } from '@sveltejs/kit';

export async function load({ cookies }: any) {
	const token = cookies.get('token');
	if (token) {
		throw redirect(302, '/dashboard');
	}
}

export const actions = {
	default: async ({ fetch, request }: RequestEvent) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		const username = data.get('username');
		if (!username || !password || !email) {
			return fail(400, { msg: 'empty fields please fill the form', error: true, username, email });
		}
		const res = await fetch('/mediapi/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, username, password })
		});
		const newRes = await res.json();

		return { response: newRes };
	}
};
