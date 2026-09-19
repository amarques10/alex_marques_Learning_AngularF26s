import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meal } from './shared/models/meal';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('alex_marques_Learning_AngularF26');

  colour = 'black';
  number = 89;

  protected mealList: Meal[] = [
    { id: 1, name: 'chicken parm', calories: 785, type: 'healthy', ingredients: ['chicken', 'pasta', 'cheese', 'tomato sauce'], category: 'dinner'},
    { id: 2, name: 'bacalhau a bras', calories: 1050, type: 'healthy', ingredients: ['codfish', 'potato', 'onion', 'egg'], category: 'dinner'},
    { id: 3, name: 'steak and eggs', calories: 1590, type: 'healthy', ingredients: ['steak', 'egg', 'hashbrown'], category: 'breakfast'},
    { id: 4, name: 'pasta', calories: 1050, type: 'unhealthy', ingredients: ['pasta', 'tomato sauce'], category: 'Dinner'},
    { id: 5, name: 'grilled cheese', calories: 1224, type: 'unhealthy', ingredients: ['bread', 'cheese', 'butter'], category: 'lunch'},
    { id: 6, name: 'chicken garden salad', calories: 850, type: 'healthy', ingredients: ['chicken', 'lettuce', 'tomato', 'carrots', 'cucumber'], category: 'lunch'},
  ];


}
