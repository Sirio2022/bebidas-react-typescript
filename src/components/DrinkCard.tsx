import { useRecipe } from '../hooks/useRecipe';
import type { RecipeType } from '../types';

type DrinkCardProps = {
  drink: RecipeType;
};

export default function DrinkCard({ drink }: DrinkCardProps) {
  const { selectRecipe } = useRecipe();

  return (
    <div className="border rounded-xl shadow-lg bg-black bg-opacity-10">
      <div className=" overflow-hidden">
        <img
          src={drink.strDrinkThumb}
          alt={`Imagen of ${drink.strDrink}`}
          className="hover:scale-125 transition-transform duration-300 ease-in-out "
        />
      </div>

      <div className="p-5">
        <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
        <button
          type="button"
          className="bg-orange-500 text-white font-bold px-4 py-2 rounded-md mt-2 hover:bg-orange-600 transition-colors duration-300 ease-in-out w-full"
          onClick={() => selectRecipe(drink.idDrink)}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
