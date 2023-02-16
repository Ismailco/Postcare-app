import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NavBar, Footer, ProtectedRoutes } from './components';
import {
  Landing, Login, NotFound404, Signup, Dashboard, Profile, Messanger, ToDoList, ChatView, Recovery,
} from './pages';

const App = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <div className="w-full">
      <BrowserRouter>
        <NavBar toggleMenu={toggleMenu} />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound404 />} />
          <Route element={<ProtectedRoutes open={open} setOpen={setOpen} toggleMenu={toggleMenu} />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/recovery" element={<Recovery />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/messanger" element={<Messanger />} />
            <Route exact path="/messanger/1" element={<ChatView />} />
            <Route exact path="/todo" element={<ToDoList />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
