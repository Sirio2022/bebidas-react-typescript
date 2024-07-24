import DrinkCard from '../components/DrinkCard';
import { useAppStore } from '../store/useAppStore';

export default function FavoritesPage() {
  const favorites = useAppStore((state) => state.favorites);

  return (
    <>
      <h1 className="text-6xl font-extrabold">Favorites</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 my-5">
        {favorites.map((drink) => (
          <DrinkCard key={drink.idDrink} drink={drink} />
        ))}
      </div>
    </>
  );
}
