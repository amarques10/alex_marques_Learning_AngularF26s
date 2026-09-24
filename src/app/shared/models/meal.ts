export interface Meal {
  id: number;
  name: string;
  calories: number;
  type?: boolean;
  ingredients: string[] | string;
  category: string;
}
