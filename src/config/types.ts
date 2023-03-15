export interface NoteData {
  title: string;
	description?: string;
	completed: boolean;
	startDate: Date;
	dueDate?: Date;
	priority: "Baixa" | "Normal" | "Alta";
	state: "Novo" | "Em Andamento" | "Pronto";
	tags?: string[];
	id: number;
}