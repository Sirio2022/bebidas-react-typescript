import { useEffect } from 'react';
import { getCategories } from '../services/RecipesService';
import { useAppStore } from '../store/useAppStore';

export function useCategories() {
  const categories = useAppStore((state) => state.categories);
  const setCategories = useAppStore((state) => state.setCategories);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();

      setCategories([data.drinks][0]);
    };
    fetchCategories();
  }, [setCategories]);

  return {
    categories,
  };
}
