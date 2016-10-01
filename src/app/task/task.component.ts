import { Component, Input } from '@angular/core';
import { Task } from './task.model';
import { ProjectService } from '../project/project.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: Task;

  constructor(private projectService: ProjectService) { }

  completeTask(task: Task) {
    task.complete();
  }
}
