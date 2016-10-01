/* tslint:disable:no-unused-variable */

import {TestBed, async, getTestBed, ComponentFixture, fakeAsync} from '@angular/core/testing';
import { ProjectPinboardComponent } from './project-pinboard.component';
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule} from '@angular/forms';

xdescribe('Component: ProjectPinboard', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          ProjectPinboardComponent,
      ],
      providers: [
      ],
      imports: [
          RouterTestingModule,
          FormsModule
      ]
    });
    TestBed.compileComponents();
  }));

  it('should create an instance', fakeAsync(() => {
    let fixture: ComponentFixture = getTestBed().createComponent(ProjectPinboardComponent);
    expect(fixture).toBeTruthy();
  }));
});
