import { InferInput } from 'valibot';
import {
  CategorySchema,
  RecipeDetailSchema,
  RecipeSchema,
  SearchRecipe,
} from '../schemas/recipes-schema';

export type CategoryType = InferInput<typeof CategorySchema>;

export type SearchRecipeType = InferInput<typeof SearchRecipe>;

export type RecipeType = InferInput<typeof RecipeSchema>;

export type RecipeDetailType = InferInput<typeof RecipeDetailSchema>;
