import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgCourseCardComponent } from './ag-course-card.component';

describe('AgCourseCardComponent', () => {
  let component: AgCourseCardComponent;
  let fixture: ComponentFixture<AgCourseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgCourseCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
