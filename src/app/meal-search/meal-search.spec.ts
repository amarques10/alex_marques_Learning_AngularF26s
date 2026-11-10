import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealSearch } from './meal-search';

describe('MealSearch', () => {
  let component: MealSearch;
  let fixture: ComponentFixture<MealSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(MealSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
