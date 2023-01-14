import React from 'react';
import { footerLinksOne, footerLinksTwo, footerLinksThree, copyRightText } from '../constants';

const Footer = () => (
  <footer className="w-full p-4 bottom-0 bg-[#bbb] text-[#828282] font-medium">
    <div className="flex justify-center items-start">
      <div className="w-full">
        <img className="w-36 h-20 bg-gray-400" src="../assets/logo.png" alt="logo" />
      </div>
      <ul className="flex flex-col mr-20 w-56">
        {footerLinksOne.map((link, index) => (
          <li className="hover:underline" key={index}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col mr-20 w-56">
        {footerLinksTwo.map((link, index) => (
          <li className="hover:underline" key={index}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
    <hr className="my-4 bg-white" />
    <div className="flex justify-between items-center">
      <ul className="flex">
        {footerLinksThree.map((link, index) => (
          <li className="mr-2 hover:underline" key={index}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
      <p className="text-center">{copyRightText}</p>
    </div>
  </footer>
);

export default Footer;
