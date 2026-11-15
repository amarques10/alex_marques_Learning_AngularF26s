import { inject, Injectable } from '@angular/core';
import { computed, signal, effect } from '@angular/core';
import { Meal } from '../shared/models/meal';
import { MEAL_CONFIG } from '../shared/meal-config';
import { MealApiService } from './meal-api-service';
import { finalize } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MealService {
  private config = inject(MEAL_CONFIG);
  private api = inject(MealApiService);
  private meals = signal<Meal[]>([]);
  mealList = this.meals.asReadonly();
  mealCount = computed(() => this.meals().length);
  isLoading = signal(false);
  error = signal<string | null>(null);
  detailLoading = signal(false);
  detailError = signal<string | null>(null);

  loadByArea(area: string): void {
    this.isLoading.set(true);
    this.error.set(null);

    this.api.byArea(area).pipe(finalize(() =>
    this.isLoading.set(false))).subscribe({
      next: (meals) => {
        this.meals.set(meals);
      },
      error: (err) => {
        console.error('Failed to load meals', err);
        this.error.set("Could not load meals. Please try again.");
      },
    });
  }

  loadDetails(id: string): void {
    const existing = this.getById(id);

    if (id.startsWith('local-')) {
      return;
    }

    if (existing?.strInstructions !== undefined) {
      return;
    }

    this.detailLoading.set(true);
    this.detailError.set(null);

    this.api.byId(id).pipe(finalize(() =>
    this.detailLoading.set(false))).subscribe({
      next: (meal) => {
        if (meal) {
          this.meals.update(list => {
            const found = list.some(m => m.idMeal === id);

            if (found) {
              return list.map(m =>
              m.idMeal === id ? { ...m, ...meal } : m);
            }

            return [...list, meal];
          });
        } else {
          this.detailError.set('Meal not found');
        }
      },
      error: (err) => {
        console.log('Failed to load meal details', err);
        this.detailError.set('Could not be load the meal details');
      }
    });

  }

  // mealFilter = computed(() => this.mealList().filter((b) => this.config.defaultCategory));
  // filteredCount = computed(() => this.mealFilter().length);
  // readonly defaultCategory = this.config.defaultCategory; // 9b?

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
    this.loadByArea('Portuguese');

    effect(() => {
      console.log('Meal count is now ', this.mealCount());
    });
  }
}
