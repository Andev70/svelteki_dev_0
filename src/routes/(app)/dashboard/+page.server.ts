import { JWT_SECRET } from '$env/static/private';
import type { RequestEvent } from '../$types';
import jwt from 'jsonwebtoken';

export async function load({ fetch, cookies }: RequestEvent) {
	const token = cookies.get('token');
	const decoded = jwt.verify(token, JWT_SECRET);

	const response = await fetch('/mediapi/feedAlter');

	return {
		users: await response.json(),
		decoded
	};
}

export const actions = {
	deleteUsers: async ({ fetch }: RequestEvent) => {
		const response = await fetch('/mediapi/deleteAllUser');

		return { deleted: await response.json() };
	},

	logout: async ({ fetch }: RequestEvent) => {
		const response = await fetch('/mediapi/logout');

		return { logouted: await response.json() };
	}
};
