import { redirect } from '@sveltejs/kit';

export async function load({ fetch, cookies }: any) {
	const token = cookies.get('token');
	if (token) {
		throw redirect(302, '/dashboard');
	}
}
