export interface Meal {
  idMeal: string;
  strMeal: string; //name of dish
  strMealThumb?: string; // Thumbnail of each meal
  strCategory?: string; // Vegetarian etc..
  strArea?: string; // type of food, italian, portuguese, etc..
  strInstructions?: string; // instructions to cook meal
  strTags ? :  string | null; // Pasta,Curry
}
// Fields at which I will use
/*

idMeal - string (even if it is changed slightly as discussed in class)
strMeal - string
strMealThumb - string for the image
strCategory - string
strArea - string
strInstructions - string | strIngredient as an array if I can like I did in my project.
strTags - string ? possibly

 */
