import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealListItem } from './meal-list-item';

describe('MealListItem', () => {
  let component: MealListItem;
  let fixture: ComponentFixture<MealListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(MealListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
