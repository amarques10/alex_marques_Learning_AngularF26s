import { Component, inject } from '@angular/core';
import { Meal } from '../shared/models/meal';
import { MealListItem, mealEvent } from '../meal-list-item/meal-list-item';
import { MealService} from '../services/mealService';

@Component({
  selector: 'app-meal-list',
  imports: [MealListItem],
  templateUrl: './meal-list.html',
  styleUrl: './meal-list.scss',
})
export class MealList {
private mealService = inject(MealService);

protected mealList = this.mealService.mealList;

  onMealOpened(event: mealEvent): void {
    console.log("Opened: ", event.id);
  }
}
