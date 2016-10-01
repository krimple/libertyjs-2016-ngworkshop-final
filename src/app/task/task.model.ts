import { UUID } from 'angular2-uuid';

export class Task {
    id: string;
    projectId: string;
    order: number;
    priority: number;
    dueDate: Date;
    description: string;
    completed: boolean;
    completedDate: Date;

    constructor(description: string, projectId?: string, dueDate?: Date, priority?: number, order?: number) {
        this.id = UUID.UUID();
        this.projectId = projectId;
        this.description = description ? description : undefined;
        this.dueDate = dueDate ? dueDate : new Date();
        this.priority = priority ? priority : 1;
        this.order = order ? order : 100;
    }

    complete() {
        this.completed = true;
        this.completedDate = new Date();
    }
}
