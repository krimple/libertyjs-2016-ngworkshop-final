/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TaskComponent } from './task.component';
import {ProjectService} from "../project/project.service";

describe('Component: Task', () => {
  it('should create an instance', () => {
    let component = new TaskComponent(new ProjectService(null));
    expect(component).toBeTruthy();
  });
});
