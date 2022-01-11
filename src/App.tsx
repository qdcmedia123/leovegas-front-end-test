import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes, Navigate } from "react-router-dom";
import 'scss/main.scss';
import Search from 'components/search';
import { store } from 'state';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Search />}></Route>
        </Routes>
      </Provider>

    </div>
  );
}

export default App;
