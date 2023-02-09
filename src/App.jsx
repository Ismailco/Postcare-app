import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NavBar, Footer, ProtectedRoutes } from './components';
import { Landing, Login, NotFound404, Signup, Dashboard, Profile, Messanger, ToDoList, ChatView } from './pages';

const App = () => (
  <div className="w-full">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound404 />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
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

export default App;
