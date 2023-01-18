import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { whiteLogo, logo } from '../assets/img';

const NavBar = () => (
  <nav className="w-full h-[80px] flex px-2 justify-between items-center bg-primary font-medium">
    <Link to="/">
      <img className="hidden md:block w-36 h-10 bg-gray-400" src={whiteLogo} alt="logo" />
      <img className="md:hidden w-20 h-10 bg-gray-400" src={logo} alt="logo" />
    </Link>
    <ul className="NavLinks flex">
      {navLinks.map((link, index) => (
        <li className={`${index === navLinks.length - 1 ? 'mr-2 bg-secondary hover:bg-accent-100' : 'mr-4'} text-white rounded-full p-2 duration-500`} key={index}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);
export default NavBar;
