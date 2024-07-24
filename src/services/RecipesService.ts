import axios from 'axios';
import { RecipeType, SearchRecipeType } from '../types';
import { parse } from 'valibot';
import {
  CategoriesAPIResponseSchema,
  RecipeDetailsAPIResponseSchema,
  RecipiesAPIResponseSchema,
} from '../schemas/recipes-schema';

export async function getCategories() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const response = await axios.get(url);
  const { data } = response;
  const result = parse(CategoriesAPIResponseSchema, data);

  return result;
}

export async function getRecipes(data: SearchRecipeType) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${data.category}&i=${data.ingredient}`;
  const response = await axios.get(url);
  const { data: recipes } = response;
  const result = parse(RecipiesAPIResponseSchema, recipes);

  return result;
}

export async function getRecipeDetail(id: RecipeType['idDrink']) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await axios.get(url);
  const { data } = response;
  const result = parse(RecipeDetailsAPIResponseSchema, data);

  return result;
}
