import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navigationLinks } from '../constants';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  // I need to fix this later it's not updating the current location
  const [currentLocation, setCurrentLocation] = useState(location.href);
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
    setCurrentLocation(location.href);
  }, []);

  return (
    <div className="fixed top-0 min-h-full xl:static flex justify-start items-start bg-[#6B7280] text-white">
      <nav className={`${open ? 'md:w-96' : 'md:w-0'} duration-200`}>
        <ul className={` ${open ? 'flex' : 'hidden'} flex flex-col justify-between items-between m-10`}>
          {navigationLinks.map((link) => (
            <li key={link.id} className={`${currentLocation.includes(link.path) ? 'bg-secondary' : ''} my-2 duration-500 hover:bg-secondary p-4 rounded-md font-bold`}>
              <Link to={link.path} className="w-full" onClick={toggleMenuMobile}>
                <i className={`${link.id === 1 ? 'far fa-home' : 'fal fa-circle'} ${link.id === 2 ? 'far fa-user' : 'fal fa-circle'} ${link.id === 3 ? 'far fa-comments' : 'fal fa-circle'} ${link.id === 4 ? 'far fa-tasks' : 'fal fa-circle'} pr-2`}></i>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className={`${open ? 'top-0' : 'top-20 xl:top-0'} h-0 w-0 outline-none relative`} onClick={toggleMenu}>
        <i className={`${open ? 'fas fa-angles-left -left-9 rounded-l-3xl' : 'fas fa-angles-right -left-2 rounded-r-3xl'} duration-300 relative cursor-pointer text-black text-xl p-2 duration-500`}></i>
      </button>
    </div>
  );
};

export default Navigation;
