import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import todoRoutes from './routes/todoRoutes';

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 3002;
const MONGO_URL: string = process.env.MONGO_URL!;

mongoose
	.connect(MONGO_URL)
	.then(() => {
		console.log('Connected to MongoDB is successfully!');
	})
	.catch(err => {
		console.log(err);
	});

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
	res.json({ message: 'Backend server is running!' });
});

// Health check
app.get('/api/health', (req: Request, res: Response) => {
	res.json({
		message: 'Server is healthy!',
		timestamp: new Date().toISOString(),
	});
});

// Start server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
