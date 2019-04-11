import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CluesByRandomComponent } from './clues-by-random.component';

describe('CluesByRandomComponent', () => {
  let component: CluesByRandomComponent;
  let fixture: ComponentFixture<CluesByRandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CluesByRandomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CluesByRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
