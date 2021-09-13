export interface TodoContent {
	id: string;
	title: string;
	description: string;
  isCompleted: boolean;
  dueDate: moment;
  isPriority: boolean;
}