import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export async function GET({ cookies }: RequestEvent) {
	try {
		cookies.delete('token', { path: '/' });
		return json({ msg: 'logout successfull' }, { status: 200 });
	} catch (e) {
		console.log(e);
		return json({ msg: 'internal error ', success: false }, { status: 500 });
	}
}
