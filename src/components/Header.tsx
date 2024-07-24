import { NavLink, useLocation } from 'react-router-dom';
import IngredientForm from './IngredientForm';
import { useMemo } from 'react';

export default function Header() {
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === '/', [pathname]);

  return (
    <header
      className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}
    >
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/logo.svg" alt="App logo" />
          </div>

          <nav className=" flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-500 uppercase font-bold hover:text-gray-300'
                  : 'text-white uppercase font-bold hover:text-gray-300'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-500 uppercase font-bold hover:text-gray-300'
                  : 'text-white uppercase font-bold hover:text-gray-300'
              }
            >
              Favorites
            </NavLink>
          </nav>
        </div>
        {isHome && <IngredientForm />}
      </div>
    </header>
  );
}
