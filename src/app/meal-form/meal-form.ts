import { Component, computed, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MealService } from '../services/mealService';
import { Router } from '@angular/router';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-meal-form',
  imports: [ReactiveFormsModule],
  templateUrl: './meal-form.html',
  styleUrl: './meal-form.scss',
})
export class MealForm {
  private fb = inject(FormBuilder);
  private mealService = inject(MealService);
  private router = inject(Router);

  id = input<string>();
  protected isEditMode = computed(() => this.id() !== undefined);

  mealForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    calories: [0, [Validators.required, Validators.min(1)]],
    category: ['breakfast'],
    ingredients: ['', Validators.required],
  });

  protected onSubmit(): void {
    console.log('Submit clicked. Form valid:', this.mealForm.valid);
    if (this.mealForm.invalid) return;

    const formValue = this.mealForm.getRawValue();
    const id = this.isEditMode() ? Number(this.id()) : this.mealService.nextId();

    if (this.isEditMode()) {
      this.mealService.updateMeal({ id, ...formValue });
    } else {
      this.mealService.addMeal({ id, ...formValue });
    }

    this.mealForm.reset();
    this.router.navigate(['/meals', id]);
  }
}
