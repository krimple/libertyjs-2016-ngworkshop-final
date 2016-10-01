import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskComponent } from './task.component';
import { TaskService } from './task.service';
import { Task } from './task.model';

import { BootstrapModule } from '../bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BootstrapModule
  ],
  declarations: [
    TaskComponent
  ],
  providers: [
    TaskService
  ],
  exports: [
    TaskComponent
  ]
})
export class TaskModule { }
