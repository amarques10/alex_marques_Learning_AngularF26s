import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealByType } from './meal-by-type';

describe('MealByType', () => {
  let component: MealByType;
  let fixture: ComponentFixture<MealByType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealByType],
    }).compileComponents();

    fixture = TestBed.createComponent(MealByType);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
