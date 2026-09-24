import { Component } from '@angular/core';
import { Meal } from '../shared/models/meal';

@Component({
  selector: 'app-meal-list',
  imports: [],
  templateUrl: './meal-list.html',
  styleUrl: './meal-list.scss',
})
export class MealList {
  protected mealList: Meal[] = [
    {
      id: 1,
      name: 'chicken parm',
      calories: 785,
      type: true,
      ingredients: ['chicken', 'pasta', 'cheese', 'tomato sauce'],
      category: 'dinner',
    },
    {
      id: 2,
      name: 'bacalhau a bras',
      calories: 1050,
      type: true,
      ingredients: ['codfish', 'potato', 'onion', 'egg'],
      category: 'dinner',
    },
    {
      id: 3,
      name: 'steak and eggs',
      calories: 1590,
      type: true,
      ingredients: ['steak', 'egg', 'hashbrown'],
      category: 'breakfast',
    },
    {
      id: 4,
      name: 'pasta',
      calories: 1050,
      type: false,
      ingredients: ['pasta', 'tomato sauce'],
      category: 'Dinner',
    },
    {
      id: 5,
      name: 'grilled cheese',
      calories: 1224,
      type: false,
      ingredients: ['bread', 'cheese', 'butter'],
      category: 'lunch',
    },
    {
      id: 6,
      name: 'chicken garden salad',
      calories: 850,
      type: true,
      ingredients: ['chicken', 'lettuce', 'tomato', 'carrots', 'cucumber'],
      category: 'lunch',
    },
  ];
}
