export interface Meal {
  idMeal: string;
  strMeal: string; //name of dish
  strCategory: string; // Vegetarian etc..
  strArea: string; // type of food, italian, portuguese, etc..
  strCountry: string; // Country
  strInstructions: string; // instructions to cook meal
  strTags ? :  string; // Pasta,Curry
}
// Fields at which I will use
/*

idMeal - string (even if it is changed slightly as discussed in class)
strMeal - string
strCategory - string
strArea - string
strCountry - string
strInstructions - string | strIngredient as an array if I can like I did in my project.
strTags - string ? possibly

 */
