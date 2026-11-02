import { Routes } from '@angular/router';
import { MealList } from './meal-list/meal-list';
import { MealDetail } from './meal-detail/meal-detail';
import { MealForm } from './meal-form/meal-form';

export const routes: Routes = [
  { path: '', redirectTo: '/meals', pathMatch: 'full' },
  { path: 'meals', component: MealList },
  { path: 'meals/:id', component: MealDetail },
  { path: 'add-meal', component: AddMeal },

  { path: 'add', component: MealForm },
  { path: 'edit/:id', component: MealForm },

  { path: '**', component: PageNotFound }, //404 must be last
];
