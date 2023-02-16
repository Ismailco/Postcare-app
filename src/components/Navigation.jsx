import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationLinks, userName } from '../constants';

const Navigation = ({ open, setOpen, toggleMenu }) => {
  const { pathname } = useLocation();

  const toggleMenuMobile = () => {
    if (window.innerWidth < 1280) {
      setOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    if (window.innerWidth > 1224) {
      setOpen(true);
    }
  }, []);

  return (
    <div className="z-10 fixed top-0 min-h-full xl:static flex justify-start items-start bg-[#6B7280] text-white">
      <nav className={`${open ? 'w-screen md:w-96' : 'w-0'} duration-300 flex flex-col justify-between h-screen xl:h-full`}>
        <ul className={` ${open ? 'flex' : 'hidden'} flex flex-col justify-between items-between m-10`}>
          {navigationLinks.map((link) => (
            <li key={link.id} className={`${pathname === link.path ? 'bg-secondary' : ''} my-2 duration-500 hover:bg-secondary p-4 rounded-md font-bold`}>
              <Link to={link.path} className="w-full" onClick={toggleMenuMobile}>
                <i className={`${link.id === 1 ? 'far fa-home' : 'fal fa-circle'} ${link.id === 2 ? 'far fa-user' : 'fal fa-circle'} ${link.id === 3 ? 'far fa-comments' : 'fal fa-circle'} ${link.id === 4 ? 'far fa-tasks' : 'fal fa-circle'} pr-2`}></i>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className={`${open ? 'flex' : 'hidden'} flex flex-col justify-center items-start mx-10 w-full`}>
          <hr className="w-3/4 bg-dark" />
          <div className="flex justify-start my-6 items-center">
            <i className="fas fa-user-circle text-5xl mr-2"></i>
            <p className="text-sm font-bold">{userName}</p>
          </div>
        </div>
      </nav>
      <button className={`${open ? 'top-0' : 'top-20 xl:top-0'} h-0 w-0 outline-none relative`} onClick={toggleMenu}>
        <i className={`${open ? 'fas fa-angles-left -left-9 rounded-l-3xl' : 'fas fa-angles-right -left-2 rounded-r-3xl'} duration-300 relative cursor-pointer text-black text-xl p-2 duration-500 hidden xl:block`}></i>
        <i className={`${open ? 'fas fa-angles-left -left-9 rounded-l-3xl' : ''} relative cursor-pointer xl:text-black p-2 text-2xl flex xl:hidden`}></i>
      </button>
    </div>
  );
};

export default Navigation;
