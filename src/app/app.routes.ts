import { Routes } from '@angular/router';
import { MealList } from './meal-list/meal-list';
import { MealDetail } from './meal-detail/meal-detail';
import { MealForm } from './meal-form/meal-form';
import { PageNotFound } from './page-not-found/page-not-found';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/meals', pathMatch: 'full' },
  { path: 'meals', component: MealList },
  { path: 'meals/:id', component: MealDetail },

  { path: 'add', component: MealForm },
  { path: 'edit/:id', component: MealForm, canActivate: [authGuard]},

  { path: '**', component: PageNotFound }, //404 must be last
];
