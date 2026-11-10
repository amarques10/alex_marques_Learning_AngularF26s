import { inject, Injectable, Signal } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { MEAL_CONFIG } from '../shared/meal-config';
import { Meal } from '../shared/models/meal';
import { catchError, Observable, of, pipe, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealApiService {
  private http = inject(HttpClient);
  private config = inject(MEAL_CONFIG);
  private url = `${this.config.apiBaseUrl}/1/`;

  // HttpClient: returns cold Observables
  search(query: string, perPage = 20): Observable<Meal[]> {
    return this.http.get<Meal[]>(`${this.url}/search`, {
      params: { query, per_page: perPage },
    });
  }

  getById(id: string): Observable<Meal | null> {
    return this.http.get<Meal>(`${this.url}/${id}`).pipe(
      retry(2),
      catchError(() => of(null)),
    );
  }

  // httpResource factories: call from field intializer ----

  byCountry(strCountry: Signal<string>) {
    return httpResource<Meal[]>(
      () => {
        const value = strCountry().trim();
        return value ? { url: this.url, params: { by_Country: value, per_page: 30 } } : undefined;
      },
      { defaultValue: [] },
    );
  }

  byCategory(strCategory: Signal<string>) {
    return httpResource<Meal[]>(
      () => ({
        url: this.url,
        params: { by_strCategory: strCategory(), per_page: 20 },
      }),
      { defaultValue: [] },
    );
  }

  byId(idMeal: Signal<string>) {
    return httpResource<Meal[]>(() => `${this.url}/${idMeal()}`);
  }

  byIds(ids: Signal<string[]>) {
    return httpResource<Meal[]>(
      () => (ids().length ? { url: this.url, params: { by_ids: ids().join(',') } } : undefined),
      { defaultValue: [] },
    );
  }
}
