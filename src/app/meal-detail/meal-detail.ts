import { Component, computed, effect, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MealService } from '../services/mealService';
import { MealApiService } from '../services/meal-api-service';
import { TruncatePipe } from '../pipes/truncate-pipe';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-meal-detail',
  imports: [RouterLink, TruncatePipe, UpperCasePipe],
  templateUrl: './meal-detail.html',
  styleUrl: './meal-detail.scss',
})
export class MealDetail {
  protected store = inject(MealService);

  id = input.required<string>();

  protected meal = computed(() =>
  this.store.getById(this.id()));

  protected isLoading = this.store.detailLoading;
  protected error = this.store.detailError;

  constructor() {
    effect(() => {
      this.store.loadDetails(this.id());
    });
  }
  // protected onDelete(id: string): void {
  //   this.api.remove(id);
  //   this.router.navigate(['/1']);
  // }
}
