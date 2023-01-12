import React from 'react';
import { footerLinksOne, footerLinksTwo, footerLinksThree, copyRightText } from '../constants';

const Footer = () => (
  <footer className="w-full p-4 absolute bottom-0">
    <div className="flex justify-center items-center">
      <img className="w-full" src="../assets/logo.png" alt="logo" />
      <ul className="flex flex-col mr-20">
        {footerLinksOne.map((link, index) => (
          <li key={index}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col mr-20">
        {footerLinksOne.map((link, index) => (
          <li key={index}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
    <hr className="my-4" />
    <div className="flex justify-between items-center">
      <ul className="flex">
        {footerLinksOne.map((link, index) => (
          <li className="mr-2" key={index}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
      <p className="text-center">{copyRightText}</p>
    </div>
  </footer>
);

export default Footer;
