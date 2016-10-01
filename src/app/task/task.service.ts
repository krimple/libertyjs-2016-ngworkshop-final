import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    this.tasks = JSON.parse(window.localStorage.getItem('tasks')) || [];
  }

  getTasks(projectId: string):Task[] {
    return this.tasks.filter((task) => (task.projectId == projectId));
  }

  getTask(taskId: string): Task {
    return this.tasks.filter((task) => (task.id == taskId))[0];
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    this.save();
  }

  deleteTask(taskId: string): void {
    let task = this.getTask(taskId);
    if (task) {
      let taskIndex = this.tasks.indexOf(task);
      this.tasks.splice(taskIndex, 1);
    }
    this.save();
  }

  updateTask(task: Task) {
    this.deleteTask(task.id);
    this.addTask(task);
    this.save();
  }

  save() {
    window.localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}
