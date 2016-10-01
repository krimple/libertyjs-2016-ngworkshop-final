import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BootstrapModule } from '../bootstrap';
import { ProjectModule } from '../project';
import { TaskModule } from '../task'

import { ProjectPinboardComponent } from './project-pinboard.component';

@NgModule({
  declarations: [
    ProjectPinboardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    BootstrapModule,
    ProjectModule,
    TaskModule
  ],
  providers: [],
  exports: [
    ProjectPinboardComponent
  ]
})
export class ProjectPinboardModule { }
