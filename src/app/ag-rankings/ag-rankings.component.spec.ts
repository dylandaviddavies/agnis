import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgRankingsComponent } from './ag-rankings.component';

describe('AgRankingsComponent', () => {
  let component: AgRankingsComponent;
  let fixture: ComponentFixture<AgRankingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgRankingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
