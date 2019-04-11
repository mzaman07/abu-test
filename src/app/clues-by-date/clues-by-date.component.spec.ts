import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CluesByDateComponent } from './clues-by-date.component';

describe('CluesByDateComponent', () => {
  let component: CluesByDateComponent;
  let fixture: ComponentFixture<CluesByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CluesByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CluesByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
