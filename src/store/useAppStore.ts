import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { RecipiesSliceType, recipeSlice } from './slices/recipeSlice';
import { FavoritesSliceType, favoritesSlice } from './slices/favoritesSlice';

export const useAppStore = create<RecipiesSliceType & FavoritesSliceType>()(
  devtools((...a) => ({
    ...recipeSlice(...a),
    ...favoritesSlice(...a),
  }))
);
