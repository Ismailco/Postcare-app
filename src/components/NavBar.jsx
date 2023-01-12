import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';

const NavBar = () => (
  <nav className="w-full h-[80px] flex px-2 justify-between items-center">
    <img className="w-12" src="../assets/logo.png" alt="logo" />
    <ul className="NavLinks flex">
      {navLinks.map((link, index) => (
        <li className={`${index === navLinks.length - 1 ? 'mr-0' : 'mr-4'}`} key={index}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);
export default NavBar;
