import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export async function GET({ cookies }: RequestEvent) {
	cookies.delete('token', { path: '/' });
	return json({ msg: 'logout successfull' }, { status: 200 });
}
