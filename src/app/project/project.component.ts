import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from './project.model';
import { ProjectService } from './project.service';
import { Task } from '../task/task.model';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  tasks: Task[];

  constructor (
    private taskService: TaskService, 
    private router: Router,
    route: ActivatedRoute, 
    projectService: ProjectService
  ) {
    if (route.snapshot.params['projectId']) {
      this.project = projectService.getProjectById(route.snapshot.params['projectId']);
    }
  }
  
  ngOnInit() {
    this.tasks = this.taskService.getTasks(this.project.id);
    
  }

  openProject(project: Project) {
    console.log(`Project clicked, ${project.name}`);
    this.router.navigate(['/project/', project.id]);
  }

}
