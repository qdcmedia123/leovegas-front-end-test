import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes, Navigate } from "react-router-dom";
import 'scss/main.scss';
import Search from 'components/search';
import { store } from 'state';
import NavBar from 'components/common/NavBar';
import Footer from 'components/common/Footer';

function App() {
  return (
    <div className = "container">
      <NavBar/>
      <main>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Search />}></Route>
        </Routes>
      </Provider>
      </main>
      
    <Footer/>
    </div>
  );
}

export default App;
