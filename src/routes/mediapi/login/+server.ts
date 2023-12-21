import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export async function POST(requestEvent: RequestEvent) {
	const request = requestEvent.request;
	const cookies = requestEvent.cookies;
	const body: unknown = request.json();
	console.log(body);
	cookies.set('token', 'this is test cookie', { path: '/' });
	return json({ success: true }, { status: 200 });
}
