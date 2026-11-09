import { InjectionToken } from '@angular/core';

export interface MealConfig {
  apiBaseUrl: string;
  defaultCategory: string;
}

export const MEAL_CONFIG = new InjectionToken<MealConfig>('meal.config');
