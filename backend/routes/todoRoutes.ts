import express, { Request, Response } from 'express';
import Todo, { ITodo } from '../models/Todo';

const router = express.Router();

// GET /api/todos - Get all todos
router.get('/', async (req: Request, res: Response) => {
	try {
		const todos = await Todo.find();
		// res.json({ message: 'Find your todos :)' });
		res.json(todos);
	} catch (error) {
		res.status(500).json({ message: 'Error fetching todos', error });
	}
});

// POST /api/todos - Create new todo
router.post('/', async (req: Request, res: Response) => {
	try {
		const { title, description, type } = req.body;

		if (!title) {
			return res.status(400).json({ message: 'Title is required' });
		}

		const todo = new Todo({
			title,
			description,
			type: type || 'low',
		});

		const savedTodo = await todo.save();
		res.status(201).json(savedTodo);
	} catch (error) {
		res.status(500).json({ message: 'Error creating todo', error });
	}
});

export default router;
