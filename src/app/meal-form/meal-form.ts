import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-meal-form',
  imports: [],
  templateUrl: './meal-form.html',
  styleUrl: './meal-form.scss',
})
export class MealForm {

  private fb = inject(FormBuilder);

}
