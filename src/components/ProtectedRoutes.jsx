import { Navigate, Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const useAuth = () => {
  let loggedIn = false;
  const token = localStorage.getItem('token');
  if (token && token === null && token === undefined) {
    loggedIn = true;
  } else {
    loggedIn = false;
  }

  const user = { loggedIn };
  return user && user.loggedIn;
};

function ProtectedRoutes() {
  const isAuth = useAuth();
  return isAuth ? (
    <div className="flex w-full min-h-screen">
      <Navigation />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
}

export default ProtectedRoutes;
