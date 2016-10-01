import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BootstrapModule } from '../bootstrap';
import { TaskModule } from '../task/task.module';

import { Project } from './project.model';
import { ProjectService } from './project.service';
import { ProjectComponent } from './project.component';

@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    BootstrapModule,
    TaskModule
  ],
  providers: [
    ProjectService
  ],
  exports: [
    ProjectComponent
  ]
})
export class ProjectModule { }
