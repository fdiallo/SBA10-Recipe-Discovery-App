export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions?: string;
  strCategory?: string;
}

export interface Category {
  strCategory: string;
}
