import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgCoursesComponent } from './ag-courses.component';

describe('AgCoursesComponent', () => {
  let component: AgCoursesComponent;
  let fixture: ComponentFixture<AgCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
