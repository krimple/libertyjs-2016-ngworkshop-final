import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project/project.service';
import { Project } from '../project/project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'project-pinboard',
  templateUrl: './project-pinboard.component.html',
  styleUrls: ['./project-pinboard.component.css']
})
export class ProjectPinboardComponent {

  projects: Project[];

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {
    this.projects = this.projectService.getProjects();
  }

}
