import { StateCreator } from 'zustand';
import { RecipeDetailType } from '../../types';
import { toast } from 'react-toastify';

export type FavoritesSliceType = {
  favorites: RecipeDetailType[];
  setFavorites: (favorite: RecipeDetailType[]) => void;
  loadFromLocalStorage: () => void;
};

const initialState: FavoritesSliceType = {
  favorites: [],
  setFavorites: () => {},
  loadFromLocalStorage: () => {},
};

export const favoritesSlice: StateCreator<FavoritesSliceType> = (set, get) => ({
  ...initialState,
  setFavorites: (favorite) => {
    if (get().favorites.some((f) => f.idDrink === favorite[0].idDrink)) {
      set({
        favorites: get().favorites.filter(
          (f) => f.idDrink !== favorite[0].idDrink
        ),
      });
      toast.warn('Removed from favorites'), { theme: 'colored' };
    } else {
      set({ favorites: [...get().favorites, favorite[0]] });
      toast.success('Added to favorites'), { theme: 'colored' };
    }
    localStorage.setItem('favorites', JSON.stringify(get().favorites));
  },
  loadFromLocalStorage: () => {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      set({ favorites: JSON.parse(favorites) });
    }
  },
});
