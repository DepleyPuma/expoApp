import mongoose, { Schema, Document } from 'mongoose';

export interface ITodo extends Document {
	title: string;
	active: boolean;
	description: string;
	type: 'low' | 'medium' | 'high';
	createdAt: Date;
	updatedAt: Date;
}

const ToDoSchema: Schema = new Schema(
	{
		title: {
			type: String,
			required: [true, 'Title is required'],
			trim: true,
			maxLength: [100, 'Title cannot be more then 100 chars'],
		},

		active: {
			type: Boolean,
			default: true,
		},

		description: {
			type: String,
			maxLength: [500, 'Description cannot be more then 500 chars'],
		},

		type: {
			type: String,
			enum: ['low', 'medium', 'high'],
			default: 'low',
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model<ITodo>('Todo', ToDoSchema);
