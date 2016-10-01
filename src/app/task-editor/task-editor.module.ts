import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskEditorComponent } from './task-editor.component';
import { RouterModule } from '@angular/router';

import { BootstrapModule } from '../bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BootstrapModule
  ],
  declarations: [
    TaskEditorComponent
  ]
})
export class TaskEditorModule { }
