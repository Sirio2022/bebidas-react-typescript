import { StateCreator } from 'zustand';
import { CategoryType, RecipeDetailType, RecipeType } from '../../types';

export type RecipiesSliceType = {
  categories: CategoryType[];
  drinks: RecipeType[];
  selectedRecipe: RecipeDetailType;
  modalIsOpen: boolean;
  setCategories: (categories: CategoryType[]) => void;
  setRecipes: (drinks: RecipeType[]) => void;
  setSelectedRecipe: (selectedRecipe: RecipeDetailType) => void;
  setIsModalOpen: (isOpen: boolean) => void;
  setCloseModal: () => void;
};

const initialState: RecipiesSliceType = {
  categories: [],
  drinks: [],
  selectedRecipe: {} as RecipeDetailType,
  modalIsOpen: false,
  setCategories: () => {},
  setRecipes: () => {},
  setSelectedRecipe: () => {},
  setIsModalOpen: () => {},
  setCloseModal: () => {},
};

export const recipeSlice: StateCreator<RecipiesSliceType> = (set) => ({
  ...initialState,
  setCategories: (categories) => set({ categories }),
  setRecipes: (drinks) => set({ drinks }),
  setSelectedRecipe: (selectedRecipe) => set({ selectedRecipe }),
  setIsModalOpen: (isOpen) => set({ modalIsOpen: isOpen }),
  setCloseModal: () =>
    set({ modalIsOpen: false, selectedRecipe: {} as RecipeDetailType }),
});
