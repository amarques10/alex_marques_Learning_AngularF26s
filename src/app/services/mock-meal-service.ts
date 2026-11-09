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
      // chicken parm
      idMeal: '1',
      strMeal: 'chicken parm',
      strCategory: 'Omnivore',
      strArea: 'Italian',
      strCountry: 'Italy',
      strInstructions:
        'Bread the chicken, in breadcrumb seasoning and egg. Pan fry on a skillet at 350-400F for 2-4 mins per side until golden brown.',
      strTags: 'Dinner',
    },
    {
      // bacalhau a bras
      idMeal: '2',
      strMeal: 'bacalhau a bras',
      strCategory: 'omnivore',
      strArea: 'Portuguese',
      strCountry: 'Portugal',
      strInstructions:
        'Peel apart the codfish like pulled pork, and boil the codfish and fry the french fries. Once completed remove the water used to boil, add the french fries, and add whisked egg and chopped onions. Cook and stir until the egg is cooked into the food.',
      strTags: 'Dinner',
    },
    {
      // steak and eggs
      idMeal: '3',
      strMeal: 'steak and eggs',
      strCategory: 'carnivore',
      strArea: 'Australian',
      strCountry: 'Australia',
      strInstructions:
        'Season the steak, sear in a pan for 3-5 mins per side until a golden crust forms. Fry a overeasy egg and place ontop the steak.',
      strTags: 'Dinner',
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

  updateMeal(updated: Meal): void {
    this.meals.update((list) => list.map((b) => (b.idMeal === updated.idMeal ? updated : b)));
  }

  remove(id: string) {
    this.meals.update((list) => list.filter((i) => i.idMeal !== id));
  }

  getById(id: string): Meal | undefined {
    return this.meals().find((b) => b.idMeal === id);
  }

  constructor() {
    effect(() => {
      console.log('Meal count is now ', this.mealCount());
    });
  }
}
