import { Routes } from '@angular/router';
import { MealList } from './meal-list/meal-list';
import { MealDetail } from './meal-detail/meal-detail';

export const routes: Routes = [
  { path: '', redirectTo: '/meals', pathMatch: 'full' },
  { path: 'meals', component: MealList },
  { path: 'meals/:id', component: MealDetail },
  { path: 'add-meal', component: AddMeal},
  { path: '**', component: PageNotFound }, //404 must be last
];
