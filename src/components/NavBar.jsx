import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { whiteLogo, logo } from '../assets/img';

const NavBar = () => (
  <nav className="w-full h-[80px] flex px-2 justify-between items-center bg-primary font-medium">
    <img className="hidden md:block w-36 h-10 bg-gray-400" src={whiteLogo} alt="logo" />
    <img className="md:hidden w-20 h-10 bg-gray-400" src={logo} alt="logo" />
    <ul className="NavLinks flex">
      {navLinks.map((link, index) => (
        <li className={`${index === navLinks.length - 1 ? 'mr-2 bg-secondary' : 'mr-4'} text-white rounded-full p-2 hover:text-dark`} key={index}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);
export default NavBar;
