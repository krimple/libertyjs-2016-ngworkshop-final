import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WorkshopDemoRoutingModule } from './app-routing.module';
import { ProjectPinboardModule } from './project-pinboard';
import { TaskEditorModule } from './task-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    WorkshopDemoRoutingModule,
    ProjectPinboardModule,
    TaskEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
