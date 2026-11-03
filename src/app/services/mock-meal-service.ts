import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { MEAL_CONFIG } from '../shared/meal-config';
import { Meal } from '../shared/models/meal';

@Injectable({
  providedIn: 'root',
})
export class MockMealService {
  private config = inject(MEAL_CONFIG);

  private meals = signal<Meal[]>([
    {
      id: 1,
      name: 'mocken parm',
      calories: 785,
      type: true,
      ingredients: ['mocken', 'pasta', 'cheese', 'tomato sauce'],
      category: 'dinner',
    },
    {
      id: 2,
      name: 'mockalhau a bras',
      calories: 1050,
      type: true,
      ingredients: ['mockfish', 'potato', 'onion', 'egg'],
      category: 'dinner',
    },
    {
      id: 3,
      name: 'mock and eggs',
      calories: 1590,
      type: true,
      ingredients: ['mock', 'egg', 'hashbrown'],
      category: 'breakfast',
    },
  ]);

  mealList = this.meals.asReadonly();
  mealCount = computed(() => this.meals().length);
  mealFilter = computed(() => this.mealList().filter((b) => this.config.defaultCategory));
  filteredCount = computed(() => this.mealFilter().length);
  readonly defaultCategory = this.config.defaultCategory; // 9b?

  addMeal(b: Meal): void {
    this.meals.update((list) => [...list, b]);
  }

  constructor() {
    effect(() => {
      console.log('Meal count is now ', this.mealCount());
    });
  }

  remove(id: number) {
    this.meals.update((list) => list.filter((i) => i.id !== id));
  }

  updateMeal(updated: Meal): void {
    this.meals.update((list) => list.map((b) => (b.id === updated.id ? updated : b)));
  }

  nextId(): number {
    return Math.max(0, ...this.meals().map((b) => b.id)) + 1;
  }

  getById(id: number): Meal | undefined {
    return this.meals().find((b) => b.id === id);
  }
}
