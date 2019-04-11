import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CluesByCategoryComponent } from './clues-by-category.component';

describe('CluesByCategoryComponent', () => {
  let component: CluesByCategoryComponent;
  let fixture: ComponentFixture<CluesByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CluesByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CluesByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
