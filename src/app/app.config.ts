import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { MEAL_CONFIG } from './shared/meal-config';
import { MealService } from './services/mealService';
import { MockMealService } from './services/mock-meal-service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggingInterceptor } from './interceptor/loading-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: MEAL_CONFIG,
      useValue: {
        apiBaseUrl: 'https://www.themealdb.com/api/json/v1/1/', // This is where the DB is called.
        // defaultCategory: '1',




      },
    },
    // HttpClient is already provided by default. This call is only here to add the inteceptor.

    provideHttpClient(withInterceptors([loggingInterceptor])), // this must have been required earlier except for logging inteceptor.
  ],
};
