import React from 'react';
import { Link } from 'react-router-dom';
import { navigationLinks } from '../constants';

const Navigation = () => (
  <nav className="hidden w-96 md:flex justify-start items-start bg-dark text-white">
    <ul className="w-full flex flex-col justify-between items-between m-10 ">
      {navigationLinks.map((link) => (
        <li key={link.id} className="my-2 hover:bg-black p-4 rounded-md w-full">
          <Link to={link.path} className="w-full">
            <i className="fal fa-circle fa-sm pr-2"></i>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
