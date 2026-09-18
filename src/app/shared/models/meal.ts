export interface Meal {
  id: number;
  name: string;
  calories: number;
  type?: string;
  ingredients: string[] | string;
  category: string;
}
