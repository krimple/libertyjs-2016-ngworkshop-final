import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Project } from './project.model';
import { Task } from '../task/task.model';
import { TaskService } from '../task/task.service';

@Injectable()
export class ProjectService {

  projects: Project[];

  constructor(private taskService:TaskService) {
    this.projects = JSON.parse(window.localStorage.getItem('projects')) || this.generateProjects();
    this.save();
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: string): Project {
    return this.projects.filter((project) => (project.id == id))[0];
  }

  addProject(project: Project) {
    this.projects.push(project);
    this.save();
  }

  save() {
    window.localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  generateProjects() {
    let projects = [
      new Project(UUID.UUID(), 'Angular 2 Talk', 'Ken Rimple', 'In Progress'),
      new Project(UUID.UUID(), 'React Talk', 'Ken Rimple', 'In Progress'),
      new Project(UUID.UUID(), 'React Training Updates', 'Andrea Wright', 'In Progress')
    ];

    this.taskService.addTask(new Task('Develop slides', projects[0].id, new Date(), 1, 100));
    this.taskService.addTask(new Task('Write solution', projects[0].id, new Date(), 1, 101));
    this.taskService.addTask(new Task('Create Skeleton', projects[0].id, new Date(), 1, 102));
    this.taskService.addTask(new Task('Set up sample repo', projects[0].id, new Date(), 1, 103));
    this.taskService.addTask(new Task('Update instructions', projects[0].id, new Date(), 1, 104));

    return projects;
  }
}
