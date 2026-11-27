import {
  afterNextRender,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MealService } from '../services/mealService';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-meal-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './meal-form.html',
  styleUrl: './meal-form.scss',
})
export class MealForm {
  private fb = inject(FormBuilder);
  private mealService = inject(MealService);
  private router = inject(Router);

  // For autofocus functionality that I missed in A8
  private mealName = viewChild<ElementRef<HTMLInputElement>>('mealName');

  // Created to allow MatSelect options, based on search by category.
  protected categories = [
    'Beef',
    'Breakfast',
    'Chicken',
    'Dessert',
    'Goat',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
    'Starter',
    'Vegan',
    'Vegetarian',
  ];

  id = input<string>();
  protected isEditMode = computed(() => this.id() !== undefined);

  // Sets the rules for the properties of the form.
  mealForm = this.fb.nonNullable.group({
    strMeal: ['', [Validators.required, Validators.minLength(2), noWhitespaceValidator]],
    strCategory: ['', [Validators.required, noWhitespaceValidator]],
    strArea: ['Origin'],
    strInstructions: ['', [Validators.required, noWhitespaceValidator]],
    strTags: ['', noWhitespaceValidator],
  });

  // Logic to construct a new meal into the webpage if ID doesn't exist
  constructor() {
    effect(() => {
      const id = this.id();

      if (id !== undefined) {
        const meal = this.mealService.getById(id);

        if (meal) {
          this.mealForm.patchValue({
            strMeal: meal.strMeal,
            strCategory: meal.strCategory ?? '',
            strArea: meal.strArea ?? '',
            strInstructions: meal.strInstructions ?? '',
            strTags: meal.strTags ?? '',
          });
        }
      }
    });
    // Auto focus
    afterNextRender(() => {
      this.mealName()?.nativeElement.focus();
    });

  }

  protected onSubmit(): void {
    console.log('Submit clicked. Form valid:', this.mealForm.valid);
    if (this.mealForm.invalid) return;

    const formValue = this.mealForm.getRawValue();
    const idMeal = this.id() ?? `local-${crypto.randomUUID()}`;

    if (this.isEditMode()) {
      this.mealService.updateMeal({ idMeal, ...formValue });
    } else {
      this.mealService.addMeal({ idMeal, ...formValue });
    }

    this.mealForm.reset();
    this.router.navigate(['/meals', idMeal]);
  }
}
function noWhitespaceValidator(control: AbstractControl) {

  const value = control.value;

  if (typeof value === 'string' && value.length > 0 && value.trim().length === 0) {
    return { whitespace : true };
  }
  return null;
}
