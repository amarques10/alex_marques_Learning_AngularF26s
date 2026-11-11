import { InjectionToken } from '@angular/core';

export interface MealConfig {
  apiBaseUrl: string;
}

export const MEAL_CONFIG = new InjectionToken<MealConfig>('MEAL_CONFIG');
