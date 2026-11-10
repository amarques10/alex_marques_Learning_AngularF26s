import { Component, DestroyRef, inject, signal } from '@angular/core';
import { MealApiService } from '../services/meal-api-service';
import { Meal } from '../shared/models/meal';
import { MealListItem } from '../meal-list-item/meal-list-item';

@Component({
  selector: 'app-meal-search',
  imports: [MealListItem],
  templateUrl: './meal-search.html',
  styleUrl: './meal-search.scss',
})
export class MealSearch {
  private api = inject(MealApiService);
  private destroyRef = inject(DestroyRef);

  // The app is zoneless, so values set inside subscribe() must be signals
  // or the template would never find out they changed.
  results = signal<Meal[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  runSearch(term: string): void {
    const query = term.trim();
    if (!query) {
      return;
    }
    this.loading.set(true);
    this.error.set(null);
  }
}
