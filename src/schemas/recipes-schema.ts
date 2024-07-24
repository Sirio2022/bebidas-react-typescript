import { array, object, string, nullable } from 'valibot';

export const CategoriesAPIResponseSchema = object({
  drinks: array(
    object({
      strCategory: string(),
    })
  ),
});

export const CategorySchema = object({
  strCategory: string(),
});

export const SearchRecipe = object({
  ingredient: string(),
  category: string(),
});

export const RecipiesAPIResponseSchema = object({
  drinks: array(
    object({
      strDrink: string(),
      strDrinkThumb: string(),
      idDrink: string(),
    })
  ),
});

export const RecipeSchema = object({
  strDrink: string(),
  strDrinkThumb: string(),
  idDrink: string(),
});

export const RecipeDetailsAPIResponseSchema = object({
  drinks: array(
    object({
      strDrink: string(),
      strDrinkThumb: string(),
      idDrink: string(),
      strInstructions: string(),
      strIngredient1: nullable(string()),
      strIngredient2: nullable(string()),
      strIngredient3: nullable(string()),
      strIngredient4: nullable(string()),
      strIngredient5: nullable(string()),
      strIngredient6: nullable(string()),
      strIngredient7: nullable(string()),
      strIngredient8: nullable(string()),
      strIngredient9: nullable(string()),
      strIngredient10: nullable(string()),
      strIngredient11: nullable(string()),
      strIngredient12: nullable(string()),
      strIngredient13: nullable(string()),
      strIngredient14: nullable(string()),
      strIngredient15: nullable(string()),
      strMeasure1: nullable(string()),
      strMeasure2: nullable(string()),
      strMeasure3: nullable(string()),
      strMeasure4: nullable(string()),
      strMeasure5: nullable(string()),
      strMeasure6: nullable(string()),
      strMeasure7: nullable(string()),
      strMeasure8: nullable(string()),
      strMeasure9: nullable(string()),
      strMeasure10: nullable(string()),
      strMeasure11: nullable(string()),
      strMeasure12: nullable(string()),
      strMeasure13: nullable(string()),
      strMeasure14: nullable(string()),
      strMeasure15: nullable(string()),
    })
  ),
});

export const RecipeDetailSchema = object({
  strDrink: string(),
  strDrinkThumb: string(),
  idDrink: string(),
  strInstructions: string(),
  strIngredient1: nullable(string()),
  strIngredient2: nullable(string()),
  strIngredient3: nullable(string()),
  strIngredient4: nullable(string()),
  strIngredient5: nullable(string()),
  strIngredient6: nullable(string()),
  strIngredient7: nullable(string()),
  strIngredient8: nullable(string()),
  strIngredient9: nullable(string()),
  strIngredient10: nullable(string()),
  strIngredient11: nullable(string()),
  strIngredient12: nullable(string()),
  strIngredient13: nullable(string()),
  strIngredient14: nullable(string()),
  strIngredient15: nullable(string()),
  strMeasure1: nullable(string()),
  strMeasure2: nullable(string()),
  strMeasure3: nullable(string()),
  strMeasure4: nullable(string()),
  strMeasure5: nullable(string()),
  strMeasure6: nullable(string()),
  strMeasure7: nullable(string()),
  strMeasure8: nullable(string()),
  strMeasure9: nullable(string()),
  strMeasure10: nullable(string()),
  strMeasure11: nullable(string()),
  strMeasure12: nullable(string()),
  strMeasure13: nullable(string()),
  strMeasure14: nullable(string()),
  strMeasure15: nullable(string()),
});
