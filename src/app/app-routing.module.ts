import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectPinboardComponent } from './project-pinboard/project-pinboard.component';
import { ProjectComponent } from './project/project.component';
import { TaskEditorComponent } from './task-editor/task-editor.component';

const routes: Routes = [
    { path: 'project-pinboard', component: ProjectPinboardComponent },
    { path: 'project/:projectId', component: ProjectComponent },
    { path: 'task-editor/:taskId', component: TaskEditorComponent },
    { path: '', redirectTo: 'project-pinboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class WorkshopDemoRoutingModule { }
