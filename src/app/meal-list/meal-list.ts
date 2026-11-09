import { Component, computed, inject, input } from '@angular/core';
import { Meal } from '../shared/models/meal';
import { MealListItem, mealEvent } from '../meal-list-item/meal-list-item';
import { MealService} from '../services/mealService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-meal-list',
  imports: [MealListItem, RouterLink],
  templateUrl: './meal-list.html',
  styleUrl: './meal-list.scss',
})
export class MealList {
  private mealService = inject(MealService);

  protected mealList = this.mealService.mealList;

  protected filteredCount = this.mealService.filteredCount;

  onMealOpened(event: mealEvent): void {
    console.log('Opened: ', event.idMeal);
  }

  handleMealEvent(event: mealEvent) {
    if (event.action === 'removed') {
      this.mealService.remove(event.idMeal);
    }
  }
}
