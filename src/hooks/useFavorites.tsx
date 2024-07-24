import { useEffect, useMemo } from 'react';
import { useAppStore } from '../store/useAppStore';
import { RecipeDetailType } from '../types';

export function useFavorites() {
  const setFavorites = useAppStore((state) => state.setFavorites);

  const favorites = useAppStore((state) => state.favorites);

  const existFavorite = (id: RecipeDetailType['idDrink']) => {
    if (favorites.some((f) => f.idDrink === id)) {
      return true;
    }
  };

  const loadFromLocalStorage = useAppStore(
    (state) => state.loadFromLocalStorage
  );

  useEffect(() => {
    loadFromLocalStorage();
  }, [loadFromLocalStorage]);

  const hasFavorites = useMemo(() => favorites.length > 0, [favorites]);

  return {
    setFavorites,
    favorites,
    existFavorite,
    hasFavorites,
  };
}
