import { inject, Injectable } from '@angular/core';
import { computed, signal, effect } from '@angular/core';
import { Meal } from '../shared/models/meal';
import { MEAL_CONFIG } from '../shared/meal-config';

@Injectable({ providedIn: 'root' })
export class MealService {
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
    {
      // pasta
      idMeal: '4',
      strMeal: 'pasta',
      strCategory: 'vegan',
      strArea: 'Italian',
      strCountry: 'Italy',
      strInstructions:
        'Use 4-6 quarts of water per pound of pasta, bring to a rolling boil and add 1 tablespoon of salt. Drop the Pasta in and stir til cooked. Use pasta water and freshly boiled tomatoes to create the sauce. Mix the pasta and sauce together.',
      strTags: 'lunch',
    },
    {
      // grilled cheese
      idMeal: '5',
      strMeal: 'grilled cheese',
      strCategory: 'omnivore',
      strArea: 'english',
      strCountry: 'united kingdom',
      strInstructions: 'Pre heat a skillet, apply butter to both sides of the bread. Place your bread into the skillet, as a crust begins to form add the cheese to the bread and form the sandwich.',
      strTags: 'lunch',
    },
    {
      // chicken garden salad
      idMeal: '6',
      strMeal: 'chicken garden salad',
      strCategory: 'omnivore',
      strArea: 'greek',
      strCountry: 'greece',
      strInstructions: 'Begin by cooking the boneless skinless chicken breasts. As the chicken cooks, prepare your salad ingredients, by cutting ingredients like tomatoes, onions, lettuce, and cucumbers. When the chicken is finished cut the chicken and serve with the salad.',
      strTags: 'lunch',
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
