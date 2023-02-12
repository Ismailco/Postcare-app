import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../constants';
import { whiteLogo, logo } from '../assets/img';

const NavBar = ({ toggleMenu }) => {
  const { pathname } = useLocation();

  const isOnApp = () => {
    const appPaths = ['/dashboard', '/profile', '/messanger', '/messanger/1', '/todo'];
    if (!appPaths.includes(pathname)) {
      return true;
    } else {
      return false;
    }
  };

  const logedIn = localStorage.getItem('token');

  const handdleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <nav className="w-full h-[80px] flex justify-around items-center bg-primary font-medium">
      <button className={`${isOnApp() ? 'hidden' : ''} cursor-pointer outlin-none xl:hidden px-4`} onClick={toggleMenu}>
        <i className={"fas fa-bars text-3xl text-white"}></i>
      </button>
      <div className="flex justify-between w-full">
        <Link to="/">
          <img className={`${isOnApp() ? 'ml-14' : ''} hidden md:block xl:ml-10 w-15 h-10`} src={whiteLogo} alt="logo" />
          <img className={`${isOnApp() ? 'ml-14' : ''} md:hidden w-15 h-10`} src={logo} alt="logo" />
        </Link>
        <ul className="NavLinks flex">
          {!logedIn &&
            navLinks.map((link, index) => (
              <li className={`${index === navLinks.length - 1 ? 'mr-2 px-4 bg-secondary hover:bg-accent-100' : 'mr-4'} text-white font-bold rounded-full p-2 duration-500`} key={index}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
        </ul>
        {logedIn && (
          <button onClick={handdleLogout} className={`mr-2 hover:bg-secondary bg-accent-100 mr-4 text-white rounded-full p-2 duration-500 font-bold`}>
            SIGN OUT
          </button>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
