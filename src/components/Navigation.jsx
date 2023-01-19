import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navigationLinks } from '../constants';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  const toggleMenuMobile = () => {
    if (window.innerWidth < 1030) {
      setOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    if (window.innerWidth > 1030) {
      setOpen(true);
    }
  }, []);

  return (
    <div className="hidden md:fixed top-0 md:min-h-full xl:static md:flex justify-start items-start bg-dark text-white">
      <nav className={`${open ? 'md:w-96' : 'md:w-0'} duration-200`}>
        <ul className={` ${open ? 'flex' : 'hidden'} flex flex-col justify-between items-between m-10`}>
          {navigationLinks.map((link) => (
            <li key={link.id} className="my-2 duration-500 hover:bg-black p-4 rounded-md">
              <Link to={link.path} className="w-full" onClick={toggleMenuMobile}>
                <i className="fal fa-circle fa-sm pr-2"></i>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className={` ${open ? 'top-0' : 'top-20 xl:top-0'} h-0 w-0 outline-none relative`} onClick={toggleMenu}>
        <i className={`${open ? 'fas fa-angles-left -left-9 rounded-l-3xl' : 'fas fa-angles-right -left-2 rounded-r-3xl'} duration-300 relative cursor-pointer text-black text-xl p-2 bg-light duration-500`}></i>
      </button>
    </div>
  );
};

export default Navigation;
