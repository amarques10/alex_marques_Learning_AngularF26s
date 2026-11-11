import { Component, computed, inject, input, signal } from '@angular/core';
import { Meal } from '../shared/models/meal';
import { MealListItem, mealEvent } from '../meal-list-item/meal-list-item';
import { MealService} from '../services/mealService';
import { RouterLink } from '@angular/router';
import { MealApiService } from '../services/meal-api-service';
import { MEAL_CONFIG } from '../shared/meal-config';
import { config } from 'rxjs';

@Component({
  selector: 'app-meal-list',
  imports: [MealListItem, RouterLink],
  templateUrl: './meal-list.html',
  styleUrl: './meal-list.scss',
})
export class MealList {
  private api = inject(MealApiService);
  private config = inject(MEAL_CONFIG);

  strCountry = signal<string>('Portugal');

  // httpResource reruns the request every time country() changes.
  meals = this.api.byCountry(this.strCountry);

  protected onMealOpened(meal: mealEvent): void {
    console.log('Meal opened:', meal);
  }
}
