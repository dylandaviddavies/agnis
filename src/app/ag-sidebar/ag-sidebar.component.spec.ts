import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgSidebarComponent } from './ag-sidebar.component';

describe('AgSidebarComponent', () => {
  let component: AgSidebarComponent;
  let fixture: ComponentFixture<AgSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
