import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MEAL_CONFIG } from './shared/meal-config';
import { MealService } from './services/mealService';
import { MockMealService } from './services/mock-meal-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: MEAL_CONFIG,
      useValue: {
        apiBaseUrl: 'https://placeholder.example.com/api',
        defaultCategory: 'all',
      }
    },
    {
      provide: MealService, useClass: MockMealService,
    }
  ]
};
