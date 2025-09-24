export type NoteType = 'low' | 'medium' | 'high';

export type Todo = {
	_id: string; // backend zawsze zwróci _id
	title: string;
	active: boolean;
	description: string;
	type: NoteType;
	createdAt: string; // UWAGA: z backendu przychodzi jako string (ISO)
	updatedAt: string;
};

export interface TodoBase {
	title: string;
	active: boolean;
	description: string;
	type: NoteType;
}

export interface TodoCreate extends TodoBase {
	// Typ dla tworzenia nowych todo
}

export interface TodoResponse extends TodoBase {
	_id: string;
	createdAt: string; // API returns string, not Date type
	updatedAt: string;
}
