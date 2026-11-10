import { Component, computed, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MealService } from '../services/mealService';
import { MealApiService } from '../services/meal-api-service';

@Component({
  selector: 'app-meal-detail',
  imports: [RouterLink],
  templateUrl: './meal-detail.html',
  styleUrl: './meal-detail.scss',
})
export class MealDetail {
  private api = inject(MealApiService);
  protected store = inject(MealService);

  // Filled from the :id route parameter by withComponentInputBinding().
  // The API uses string UUIDs, so the id is passed through as is.
  id = input.required<string>();

  meal = this.api.byId(this.id);

  protected onDelete(id: string): void {
    this.api.remove(id);
    this.router.navigate(['/1']);
  }
}
