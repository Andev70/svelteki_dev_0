import type { RequestEvent } from '../$types';
// loding dada-z

export async function load({ fetch }: RequestEvent) {
	const response = await fetch('/mediapi/getUserTodo');
	return { myTodos: await response.json() };
}

// form actions
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
	},
	deleteTodo: async ({ request, fetch }: RequestEvent) => {
		const data = await request.formData();
		const id = data.get('todoid');
		if (!id) {
			return {
				msg: 'please select a todo'
			};
		}

		const res = await fetch('/mediapi/deleteTodo', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ id })
		});
		return { deleted: await res.json() };
	},

	// Assuming this code resides in your SvelteKit project, inside a .js or .ts file

	completeTodo: async ({ fetch, request }: RequestEvent) => {
		const formData = await request.formData();
		const taskId = formData.get('taskid');

		if (!taskId) {
			return {
				msg: 'No task ID found in the request.'
			};
		}

		const response = await fetch('/mediapi/updateTodo', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ id: taskId })
		});

		if (!response.ok) {
			return {
				error: 'Failed to complete Todo.'
			};
		}

		const updatedTodo = await response.json();

		return {
			todo: updatedTodo,
			msg: 'Todo updated successfully!'
		};
	}
};
