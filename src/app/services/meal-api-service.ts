import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MEAL_CONFIG } from '../shared/meal-config';
import { Meal } from '../shared/models/meal';
import { map, Observable } from 'rxjs';

interface MealApiResponse {
  meals: Meal[] | null;
}

@Injectable({
  providedIn: 'root',
})
export class MealApiService {

  private http = inject(HttpClient);
  private config = inject(MEAL_CONFIG);

  byArea (area: string): Observable<Meal[]> {
    return this.http.get<MealApiResponse>(
      `${this.config.apiBaseUrl}filter.php`,
      { params: { a: area }}
    ).pipe(map(response => response.meals ?? []));
  }

  byId (id: string): Observable<Meal | null> {
    return this.http.get<MealApiResponse>(
      `${this.config.apiBaseUrl}lookup.php`,
      { params: { i: id } }
    ).pipe(map(response => response.meals?.[0] ?? null));
  }
}


