import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { MEAL_CONFIG } from './shared/meal-config';
import { MealService } from './services/mealService';
import { MockMealService } from './services/mock-meal-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: MEAL_CONFIG,
      useValue: {
        apiBaseUrl: 'https://www.themealdb.com/', // This is where the DB is called.
        defaultCategory: 'all',
      },
    },
    {
      provide: MealService,
      useClass: MockMealService,
    },
  ],
};
