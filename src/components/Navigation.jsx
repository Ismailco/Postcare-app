import React from 'react';

const Navigation = () => (
  <nav className="hidden w-96 md:flex justify-start items-start bg-dark text-white">
    <ul className="w-full flex flex-col justify-between items-between m-10 ">
      <li className="my-2 hover:bg-black p-4 rounded-md w-full">
        <a className="w-full" href="#">
          <i className="fal fa-circle fa-sm pr-2"></i>Dashboard
        </a>
      </li>
      <li className="my-2 hover:bg-black p-4 rounded-md w-full">
        <a href="#">
          <i className="fal fa-circle fa-sm pr-2"></i>Profile
        </a>
      </li>
      <li className="my-2 hover:bg-black p-4 rounded-md w-full">
        <a href="#">
          <i className="fal fa-circle fa-sm pr-2"></i>Messanger
        </a>
      </li>
      <li className="my-2 hover:bg-black p-4 rounded-md w-full">
        <a href="#">
          <i className="fal fa-circle fa-sm pr-2"></i>To-Do List
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
