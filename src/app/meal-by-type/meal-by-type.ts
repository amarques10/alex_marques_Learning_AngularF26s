import { Component, inject, input } from '@angular/core';
import { MealApiService } from '../services/meal-api-service';

@Component({
  selector: 'app-meal-by-type',
  imports: [],
  templateUrl: './meal-by-type.html',
  styleUrl: './meal-by-type.scss',
})
export class MealByType {
  private api = inject(MealApiService);
  type = input.required<string>();
  meals = this.api.byCategory(this.type);
}
