import { TodoCreate, TodoResponse } from './types';

const URL = 'http://192.168.68.51:3001';

export const getTodos = async () => {
	try {
		// zamiast localhost 'http://localhost:3001/api/todos' będzie mój adres IP daltego, że localhost nie wskazuje na mój komputer tylko na urządznie które jest emulowane (telefon) daltego wywalało błąd "Network request failed"
		console.log('Backend call');

		const response = await fetch(`${URL}/api/todos`);
		// const response = await fetch('http://localhost:3001/api/todos');

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		console.log('Todos:', data);
		return data;
	} catch (error) {
		console.log('Fetch not complited:', error);
	}
};

export const postNote = async (newNote: TodoCreate): Promise<TodoResponse | null> => {
	try {
		console.log('Post Note');

		const response = await fetch(`${URL}/api/todos`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json', // DODAJ TO!
			},
			body: JSON.stringify(newNote),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data: TodoResponse = await response.json();
		return data;
	} catch (error) {
		console.log('Post new Note error:', error);
		return null;
	}
};
