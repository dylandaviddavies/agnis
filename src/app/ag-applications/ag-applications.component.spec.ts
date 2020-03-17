import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgApplicationsComponent } from './ag-applications.component';

describe('AgApplicationsComponent', () => {
  let component: AgApplicationsComponent;
  let fixture: ComponentFixture<AgApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
