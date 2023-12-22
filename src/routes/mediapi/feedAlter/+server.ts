import { connect } from '$lib/db/connect';
import User from '$lib/model/users';
import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';
connect();
export async function GET({ request }: RequestEvent) {
	const users = await User.find({});
	return json({ users }, { status: 200 });
}
