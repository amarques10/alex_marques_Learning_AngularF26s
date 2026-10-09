import { InjectionToken } from '@angular/core';

export interface MealConfig {
  apiBaseUrl: string;
  defaultCity: string;
}

export const MEAL_CONFIG = new InjectionToken<MealConfig>('meal.config');
