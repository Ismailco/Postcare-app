import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigationLinks } from '../constants';

const Navigation = () => {
  const [open, setOpen] = useState(true);
  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <div className="hidden md:flex justify-start items-start bg-dark text-white">
      <nav className={`${open ? 'md:w-96' : 'md:w-0'} duration-200`}>
        <ul className="flex flex-col justify-between items-between m-10 ">
          {navigationLinks.map((link) => (
            <li key={link.id} className="my-2 duration-500 hover:bg-black p-4 rounded-md">
              <Link to={link.path} className="w-full" onClick={toggleMenu}>
                <i className="fal fa-circle fa-sm pr-2"></i>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="h-0 w-0 outline-none" onClick={toggleMenu}>
        <i className={`${open ? 'fas fa-angles-left' : 'fas fa-angles-right'} -left-2 duration-300 relative cursor-pointer text-black text-xl p-2 bg-dark rounded-r-3xl duration-300`}></i>
      </button>
    </div>
  );
};

export default Navigation;
