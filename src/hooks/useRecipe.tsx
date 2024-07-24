import { useForm } from 'react-hook-form';
import { RecipeDetailType, RecipeType, SearchRecipeType } from '../types';
import { getRecipeDetail, getRecipes } from '../services/RecipesService';
import { useAppStore } from '../store/useAppStore';
import { useCallback, useMemo } from 'react';

export function useRecipe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchRecipeType>();

  const setRecipes = useAppStore((state) => state.setRecipes);

  const drinks = useAppStore((state) => state.drinks);

  const setSelectedRecipe = useAppStore((state) => state.setSelectedRecipe);

  const hasDrinks = useMemo(() => drinks.length > 0, [drinks]);

  const modalIsOpen = useAppStore((state) => state.modalIsOpen);

  const setIsModalOpen = useAppStore((state) => state.setIsModalOpen);

  const setCloseModal = useAppStore((state) => state.setCloseModal);

  const selectedRecipe = useAppStore((state) => state.selectedRecipe);

  const recipeResult = useCallback(
    (data: SearchRecipeType) => {
      try {
        const response = async () => {
          const result = await getRecipes(data);
          setRecipes([result.drinks][0]);
        };
        response();
      } catch (error) {
        console.error('Error fetching recipes', error);
      }
    },
    [setRecipes]
  );

  const selectRecipe = useCallback(
    async (id: RecipeType['idDrink']) => {
      try {
        const response = await getRecipeDetail(id);
        setSelectedRecipe(response.drinks[0]);
        setIsModalOpen(true);
      } catch (error) {
        console.error('Error fetching recipes', error);
      }
    },
    [setSelectedRecipe, setIsModalOpen]
  );

  const renderIngredients = useCallback(() => {
    const ingredients: JSX.Element[] = [];
    for (let i = 1; i < 16; i++) {
      const ingredient =
        selectedRecipe[`strIngredient${i}` as keyof RecipeDetailType];
      const measure =
        selectedRecipe[`strMeasure${i}` as keyof RecipeDetailType];

      if (ingredient && measure) {
        ingredients.push(
          <p key={i} className="text-gray-900 text-xl font-semibold">
            {ingredient} - {measure}
          </p>
        );
      }
    }

    return ingredients;
  }, [selectedRecipe]);

  return {
    register,
    handleSubmit,
    errors,
    recipeResult,
    hasDrinks,
    drinks,
    selectRecipe,
    modalIsOpen,
    setCloseModal,
    selectedRecipe,
    renderIngredients,
  };
}
