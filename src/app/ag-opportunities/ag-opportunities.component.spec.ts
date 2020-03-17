import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgOpportunitiesComponent } from './ag-opportunities.component';

describe('AgOpportunitiesComponent', () => {
  let component: AgOpportunitiesComponent;
  let fixture: ComponentFixture<AgOpportunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgOpportunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
