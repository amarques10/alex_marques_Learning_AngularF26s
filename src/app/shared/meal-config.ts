import { InjectionToken } from '@angular/core';

export interface MealConfig {
  apiBaseUrl: string;
  defaultCategory: string;
}

export const MEAL_CONFIG = new InjectionToken<MealConfig>('meal.config');

// Fields at which I will use
/*
idMeal (even if it is changed slightly as discussed in class)
strMeal
strCategory
strInstructions | strIngredient as an array if I can like I did in my project.
strTags ? possibly
 */
