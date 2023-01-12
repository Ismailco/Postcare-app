import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NavBar, Footer } from './components';

const App = () => (
  <div className="w-full">
    <BrowserRouter>
      <NavBar />
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
