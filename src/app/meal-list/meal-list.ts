import { Component, inject, signal } from '@angular/core';
import { MealListItem, mealEvent } from '../meal-list-item/meal-list-item';
import { MealService} from '../services/mealService';
import { MEAL_CONFIG } from '../shared/meal-config';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-meal-list',
  imports: [MealListItem, DecimalPipe],
  templateUrl: './meal-list.html',
  styleUrl: './meal-list.scss',
})
export class MealList {
  private mealService = inject(MealService);
  private config = inject(MEAL_CONFIG);

  strArea = signal<string>('Portuguese');

  meals = this.mealService.mealList;
  isLoading = this.mealService.isLoading;
  error = this.mealService.error;

  protected search(): void {
    this.mealService.loadByArea(this.strArea());
  }

  protected onMealOpened(meal: mealEvent): void {
    console.log('Meal opened:', meal);
  }

  protected handleMealEvent(meal: mealEvent): void {
    console.log('Meal removed: ', meal);
    this.mealService.remove(meal.idMeal);
  }
}
