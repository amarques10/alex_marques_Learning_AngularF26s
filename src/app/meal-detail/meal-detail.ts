import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { MealService } from '../services/mealService';

@Component({
  selector: 'app-meal-detail',
  imports: [],
  templateUrl: './meal-detail.html',
  styleUrl: './meal-detail.scss',
})
export class MealDetail {
  private mealService = inject(MealService)
  private router = inject(Router);

  id = input.required<string>();

  protected meal = computed(() => this.mealService.getById(Number(this.id())));

}
