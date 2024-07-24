import { useId } from 'react';
import { useCategories } from '../hooks/useCategories';
import { useRecipe } from '../hooks/useRecipe';
import ErrorMessage from './ErrorMessage';

export default function IngredientForm() {
  const ingredient = useId();
  const category = useId();

  const { categories } = useCategories();

  const { register, handleSubmit, errors, recipeResult } = useRecipe();

  return (
    <form
      onSubmit={handleSubmit(recipeResult)}
      className="md:w-1/2 2xl:w-1/3 my-32 p-10 bg-black bg-opacity-70 shadow-xl rounded-lg space-y-10 "
    >
      <div className=" space-y-4">
        <label
          htmlFor={ingredient}
          className="block text-white uppercase font-extrabold text-lg"
        >
          Ingredient or drink
        </label>
        <input
          type="text"
          id={ingredient}
          className="w-full mt-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-slate-900 text-white placeholder-gray-400"
          placeholder="Type the ingredient or drink. Example: Vodka, Gin, etc."
          {...register('ingredient', {
            required: 'Please select the ingredient',
          })}
        />
        <div className="relative">
          {errors.ingredient && (
            <ErrorMessage>{errors.ingredient.message}</ErrorMessage>
          )}
        </div>
      </div>
      <div className=" space-y-4">
        <label
          htmlFor={category}
          className="block text-white uppercase font-extrabold text-lg"
        >
          Category
        </label>
        <select
          id={category}
          className="w-full mt-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-slate-900 text-white placeholder-gray-400"
          {...register('category', { required: 'Please select a category' })}
        >
          <option value="">-- Select a category --</option>
          {categories?.map((category) => (
            <option key={category.strCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>
        <div className="relative">
          {errors.category && (
            <ErrorMessage>{errors.category.message}</ErrorMessage>
          )}
        </div>
      </div>
      <input
        type="submit"
        value="Search for recipes"
        className="w-full bg-orange-500 text-white uppercase font-bold p-2 rounded-md cursor-pointer hover:bg-orange-600"
      />
    </form>
  );
}
