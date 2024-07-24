import DrinkCard from '../components/DrinkCard';
import { useRecipe } from '../hooks/useRecipe';

export default function IndexPage() {
  const { drinks, hasDrinks } = useRecipe();

  return (
    <>
      <h1 className="text-6xl font-extrabold uppercase">Recipes</h1>

      {hasDrinks ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 my-5">
          {drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl">
          There are no drinks available
        </p>
      )}
    </>
  );
}
