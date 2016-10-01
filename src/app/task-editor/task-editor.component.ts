import { Component } from '@angular/core';
import { Project } from '../project/project.model';
import { ProjectService } from '../project/project.service';
import { Task } from '../task/task.model';
import { TaskService } from '../task/task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent {
  task: Task;
  projects: Project[];
  constructor(
    route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService, 
    private taskService: TaskService
  ) {
    if (route.snapshot.params['taskId'] === "new") {
      this.task = new Task("");
      this.task.projectId = route.snapshot.queryParams['projectId'];
    } else if (!route.snapshot.params['taskId']) {
      router.navigate(['/project-pinboard']);
    } else {
      this.task = this.taskService.getTask(route.snapshot.params['taskId']);
    }

    this.projects = this.projectService.getProjects();
  }

  save() {
    this.taskService.updateTask(this.task);
    this.router.navigate(['/project-pinboard']);
  }

}
