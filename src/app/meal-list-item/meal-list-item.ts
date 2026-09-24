import { Component, input } from '@angular/core';
import { Meal } from '../shared/models/meal';

@Component({
  selector: 'app-meal-list-item',
  imports: [],
  templateUrl: './meal-list-item.html',
  styleUrl: './meal-list-item.scss',
})
export class MealListItem {
  meal = input.required<Meal>();
}
