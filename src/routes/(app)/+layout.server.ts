import { redirect } from '@sveltejs/kit';

export function load({ cookies }: any) {
	const token = cookies.get('token');
	if (!token) {
		throw redirect(302, '/');
	}
}
