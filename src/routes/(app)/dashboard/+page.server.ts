import type { RequestEvent } from '../$types';

export const actions = {
	createTodo: async ({ fetch, request }: RequestEvent) => {
		const data = await request.formData();
		const title = data.get('todo');
		if (!title) {
			return {
				msg: 'add todo title'
			};
		}
		const response = await fetch('/mediapi/createTodo', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ title })
		});
		return {
			todo: await response.json()
		};
	}
};
