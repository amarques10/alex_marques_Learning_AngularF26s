import { Component, computed, inject } from '@angular/core';
import { MealService } from '../services/mealService';
import { SavedService } from '../services/saved-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-saved',
  imports: [RouterLink],
  templateUrl: './saved.html',
  styleUrl: './saved.scss',
})
export class Saved {
  protected mealService = inject(MealService);
  protected savedService = inject(SavedService);

  protected savedMeals = computed(() => {
    const ids = this.savedService.savedIds();
    const meals = this.mealService.mealList();

    return meals.filter((meal) => ids.includes(meal.idMeal));
  });
}
