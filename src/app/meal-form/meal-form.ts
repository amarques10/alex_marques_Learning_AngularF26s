import { Component, computed, effect, inject, input } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MealService } from '../services/mealService';
import { Router } from '@angular/router';

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
    name: ['', [Validators.required, Validators.minLength(2), noWhitespaceValidator]],
    calories: [0, [Validators.required, Validators.min(1)]],
    category: ['breakfast'],
    ingredients: ['', Validators.required],
    }, {
      validators: breakfastCaloriesValidator
  });

  constructor() {
    effect(() => {
      const id = this.id();

      if(id !== undefined) {
        const meal = this.mealService.getById(Number(id));

        if(meal) {
          this.mealForm.patchValue({
            name: meal.name,
            calories: meal.calories,
            category: meal.category,
            ingredients: Array.isArray(meal.ingredients)
            ? meal.ingredients.join(', ')
              : meal.ingredients
          });
        }
      }
    });
  }

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

function noWhitespaceValidator(
  control: AbstractControl
): ValidationErrors | null {

  const value = control.value;

  if (typeof value === 'string' && value.length > 0 && value.trim().length === 0) {
    return { whitespace: true};
  }
  return null;
}

function breakfastCaloriesValidator(
  control: AbstractControl
): ValidationErrors | null {

  const category = control.get('category')?.value;
  const calories = control.get('calories')?.value;

  if (category === 'breakfast' && calories > 1000) {
    return { breakfastCalories: true };
  }
  return null;
}
