import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MealList } from './meal-list/meal-list';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MealList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('alex_marques_Learning_AngularF26');


}
