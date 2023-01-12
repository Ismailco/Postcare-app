import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';

const NavBar = () => (
  <nav className="w-full h-[80px] flex px-2 justify-between items-center bg-[#e5e7eb] font-medium">
    <img className="w-36 h-10 bg-gray-400" src="../assets/logo.png" alt="logo" />
    <ul className="NavLinks flex">
      {navLinks.map((link, index) => (
        <li className={`${index === navLinks.length - 1 ? 'mr-2 bg-[#bbb] text-white rounded' : 'mr-4'} p-2 hover:underline`} key={index}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);
export default NavBar;
