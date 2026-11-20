import { Component, input, output } from '@angular/core';
import { Meal } from '../shared/models/meal';
import { RouterLink } from '@angular/router';
import { TitleCasePipe , UpperCasePipe } from '@angular/common';
import { SortPipe } from '../pipes/sort-pipe';
import { Highlight } from '../directives/highlight';

@Component({
  selector: 'app-meal-list-item',
  imports: [RouterLink, TitleCasePipe, UpperCasePipe, SortPipe, Highlight],
  templateUrl: './meal-list-item.html',
  styleUrl: './meal-list-item.scss',
})
export class MealListItem {
  meal = input.required<Meal>();

  expanded = false;
  opened = output<mealEvent>();
  removed = output<mealEvent>();

  toggle(): void {
    this.expanded = !this.expanded;
    this.opened.emit({ idMeal: this.meal().idMeal, action: 'opened' });
  }
  remove(event: MouseEvent): void {
    event.stopPropagation();

    this.removed.emit({ idMeal: this.meal().idMeal, action: 'removed' });
  }

  protected readonly Highlight = Highlight;
}
export interface mealEvent {
  idMeal: string;
  action: 'opened' | 'favourited'| 'removed';
}
