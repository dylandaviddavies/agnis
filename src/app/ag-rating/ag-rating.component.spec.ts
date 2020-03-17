import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgRatingComponent } from './ag-rating.component';

describe('AgRatingComponent', () => {
  let component: AgRatingComponent;
  let fixture: ComponentFixture<AgRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
