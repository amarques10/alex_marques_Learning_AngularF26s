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

  // Sets the rules for the properties of the form.
  mealForm = this.fb.nonNullable.group(
    {
      strMeal: ['', [Validators.required, Validators.minLength(2), this.noWhitespaceValidator]],
      strCategory: ['', [Validators.required, this.noWhitespaceValidator]],
      strArea: ['Country'],
      strCountry: ['', [Validators.required, this.noWhitespaceValidator]],
      strInstructions: ['', [Validators.required, this.noWhitespaceValidator]],
      strTags: ['', this.noWhitespaceValidator],
    },
  );

  // Logic to construct a new meal into the webpage if ID doesn't exist
  constructor() {
    effect(() => {
      const id = this.id();

      if (id !== undefined) {
        const meal = this.mealService.getById(id);

        if (meal) {
          this.mealForm.patchValue({
            strMeal: meal.strMeal,
            strCategory: meal.strCategory,
            strArea: meal.strArea,
            strCountry: meal.strCountry,
            strInstructions: meal.strInstructions,
            strTags: meal.strTags,
          });
        }
      }
    });
  }

  protected onSubmit(): void {
    console.log('Submit clicked. Form valid:', this.mealForm.valid);
    if (this.mealForm.invalid) return;

    const formValue = this.mealForm.getRawValue();
    const idMeal = this.id() ?? crypto.randomUUID();

    if (this.isEditMode()) {
      this.mealService.updateMeal({ idMeal, ...formValue });
    } else {
      this.mealService.addMeal({ idMeal, ...formValue });
    }

    this.mealForm.reset();
    this.router.navigate(['/meals', idMeal]);
  }

  protected noWhitespaceValidator(control: AbstractControl) {

    const value = control.value;

    if (typeof value === 'string' && value.length > 0 && value.trim().length === 0) {
      return { whitespace : true };
    }
    return null;
  }

}

