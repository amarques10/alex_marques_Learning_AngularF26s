import { Routes } from '@angular/router';
import { MealList } from './meal-list/meal-list';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/meals', pathMatch: 'full' },
  { path: 'meals', component: MealList },
  { path: 'meals/:id',
  loadComponent: () => import('./meal-detail/meal-detail').then(m => m.MealDetail),
  },

  { path: 'add',
  loadComponent: () => import('./meal-form/meal-form').then(m => m.MealForm),
  },

  { path: 'edit/:id', canActivate: [authGuard],
  loadComponent: () => import('./meal-form/meal-form').then(m => m.MealForm),
  },

  {path: 'saved',
  loadComponent: () => import('./saved/saved').then(m => m.Saved),
  },

  { path: '**',
  loadComponent: () => import('./page-not-found/page-not-found').then(m => m.PageNotFound),
  }, //404 must be last
];
