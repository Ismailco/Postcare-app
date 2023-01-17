import React from 'react';
import { footerLinksOne, footerLinksTwo, footerLinksThree, copyRightText } from '../constants';
import { whiteLogo } from '../assets/img';

const Footer = () => (
  <footer className="w-full leading-9 p-4 bottom-0 bg-primary text-dark md:text-white font-medium">
    <div className="flex flex-col md:flex-row justify-center font-bold items-start">
      <div className="w-full">
        <img className="w-36 h-20 bg-gray-400" src={whiteLogo} alt="logo" />
      </div>
      <ul className="flex flex-col mr-20 w-56">
        {footerLinksOne.map((link, index) => (
          <li className={`${index === 0 ? 'text-md my-2' : 'text-sm'} hover:text-dark `} key={index}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col mr-20 w-56">
        {footerLinksTwo.map((link, index) => (
          <li className={`${index === 0 ? 'text-md my-2' : 'text-sm'} hover:text-dark `} key={index}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
    <hr className="my-4 bg-white" />
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-dark text-sm">
      <ul className="flex flex-col md:flex-row">
        {footerLinksThree.map((link, index) => (
          <li className="mr-2 hover:text-light" key={index}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
      <p className="text-center mt-4 md:mt-0">{copyRightText}</p>
    </div>
  </footer>
);

export default Footer;
