import { Navigate, Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const useAuth = () => {
  const loggedIn = true;
  // if (localStorage.getItem('token')) {
  //   loggedIn = true;
  // } else {
  //   loggedIn = false;
  // }

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
