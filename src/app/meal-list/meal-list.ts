import { Component } from '@angular/core';
import { Meal } from '../shared/models/meal';
import { MealListItem, mealEvent } from '../meal-list-item/meal-list-item';

@Component({
  selector: 'app-meal-list',
  imports: [MealListItem],
  templateUrl: './meal-list.html',
  styleUrl: './meal-list.scss',
})
export class MealList {


  onMealOpened(event: mealEvent): void {
    console.log("Opened: ", event.id);
  }
}
