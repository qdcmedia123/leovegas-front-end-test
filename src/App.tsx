import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { Route, Routes, Navigate } from "react-router-dom";
import 'scss/main.scss';
import Search from 'components/search';
import { store } from 'state';
import NavBar from 'components/common/NavBar';
import Footer from 'components/common/Footer';

const SearchLazy = lazy(() => import('components/search'));
const FaviroteLazy = lazy(() => import('components/favirote'));
const WatchLatterLazy = lazy(() => import('components/watchlatter'));


function App() {
  return (
    <div className="container">
      <NavBar />
      <main>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Suspense fallback={<div>Loading.....</div>}>
              <SearchLazy />
            </Suspense>}>
            </Route>

            <Route path="/favirotes" element={<Suspense fallback={<div>Loading.....</div>}>
              <FaviroteLazy />
            </Suspense>}>
              </Route>

              <Route path="/watchlatter" element={<Suspense fallback={<div>Loading.....</div>}>
              <WatchLatterLazy />
            </Suspense>}>
              </Route>

          </Routes>
        </Provider>
      </main>

      <Footer />
    </div>
  );
}

export default App;
