import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NavBar, Footer } from './components';
import { Login, Signup } from './pages';

const App = () => (
  <div className="w-full">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
