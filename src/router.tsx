import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const IndexPage = lazy(() => import('./pages/IndexPage'));

const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));

import Layout from './layouts/Layout';

export default function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <IndexPage />
              </Suspense>
            }
            index
          />
          <Route
            path="/favorites"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <FavoritesPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
