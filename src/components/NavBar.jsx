import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { whiteLogo, logo } from '../assets/img';

const NavBar = () => {
  const logedIn = localStorage.getItem('token');
  const handdleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = "/";
  };

  return (
    <nav className="w-full h-[80px] flex px-6 md:px-6 justify-between items-center bg-primary font-medium">
      <Link to="/">
        <img className="hidden md:block w-36 h-10 ml-5" src={whiteLogo} alt="logo" />
        <img className="md:hidden w-20 h-10" src={logo} alt="logo" />
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
    </nav>
  );
};
export default NavBar;
