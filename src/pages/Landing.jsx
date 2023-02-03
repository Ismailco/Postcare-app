import React from 'react';
import { Link } from 'react-router-dom';
import { hero, BG, checkmark } from '../assets/img';

const Landing = () => (
  <main className="w-full">
    <section className="w-full flex flex-col-reverse md:flex-row justify-around items-center py-4">
      <div className="w-4/5 my-4 md:w-1/3">
        <h1 className="text-4xl font-bold text-black/80 text-center md:text-left">We make it easier for patients to recover from surgery at home</h1>
        <div>
          <Link to="/signup">
            <button className="duration-500 bg-primary text-white rounded-full py-2 px-4 mt-4 mr-4 hover:bg-black/50 shadow shadow-xl w-full md:w-fit font-bold">GET STARTED</button>
          </Link>
          <Link to="/dashboard">
            <button className="duration-500 bg-secondary text-white rounded-full py-2 px-4 mt-4 hover:bg-black/50 shadow shadow-xl w-full md:w-fit font-bold">START YOUR RECOVERY</button>
          </Link>
        </div>
      </div>
      <img className="w-96 xl:w-1/3 h-full rounded-md border border-2 border-primary" src={hero} alt="landing" />
    </section>
    <section className="w-full flex flex-row-reverse justify-around items-center py-4 bg-light">
      <div className="w-4/5 my-4 md:w-1/3">
        <h2 className="text-xl font-bold text-black/80 text-center md:text-left py-2">The Best Feature</h2>
        <p className="text-center md:text-left py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <hr className="hidden md:block border border-1 border-dark my-4" />
        <div className="flex flex-col-reverse md:flex-row-reverse">
          <ul className="py-2">
            <li className="flex justify-start items-start py-2">
              <img className="w-6 mr-2" src={checkmark} alt="checkmark" />
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </li>
            <li className="flex justify-start items-start py-2">
              <img className="w-6 mr-2" src={checkmark} alt="checkmark" />
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </li>
            <li className="flex justify-start items-start py-2">
              <img className="w-6 mr-2" src={checkmark} alt="checkmark" />
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </li>
          </ul>
          <img className="w-96 h-full rounded-md border border-2 border-dark my-4 md:hidden" src={BG} alt="landing" />
        </div>
      </div>
      <img className="w-96 xl:w-1/3 h-full rounded-md border border-2 border-dark my-4 hidden md:block" src={BG} alt="landing" />
    </section>
    <section className="w-full flex flex-row justify-around items-center py-4">
      <div className="w-4/5 my-4 md:w-1/3 flex flex-col">
        <h2 className="text-xl font-bold text-black/80 text-center md:text-left py-2">Making a big impact</h2>
        <p className="text-center md:text-left py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim aenean sed mi ac, semper viverra in nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="duration-500 bg-secondary text-white rounded-full py-2 px-4 my-4 self-center md:self-start hover:bg-primary w-fit font-bold">GET STARTED TODAY</button>
        <div className="flex flex-col-reverse md:flex-row-reverse self-start">
          <ul className="py-2 flex">
            <ul className="py-2">
              <li className="flex justify-start items-start md:py-10">
                <img className="w-6 mr-2" src={checkmark} alt="checkmark" />
                <div>
                  <p className="font-bold text-xl">1.5M</p>
                  <p className="text-dark">Current Active Users</p>
                </div>
              </li>
              <li className="flex justify-start items-start md:py-10">
                <img className="w-6 mr-2" src={checkmark} alt="checkmark" />
                <div>
                  <p className="font-bold text-xl">20+</p>
                  <p className="text-dark">Country Covered</p>
                </div>
              </li>
            </ul>
            <ul className="py-2">
              <li className="flex justify-start items-start md:py-10 md:ml-10">
                <img className="w-6 mr-2" src={checkmark} alt="checkmark" />
                <div>
                  <p className="font-bold text-xl">5.5M+</p>
                  <p className="text-dark">Total Downloads</p>
                </div>
              </li>
              <li className="flex justify-start items-start md:py-10 md:ml-10">
                <img className="w-6 mr-2" src={checkmark} alt="checkmark" />
                <div>
                  <p className="font-bold text-xl">200k+</p>
                  <p className="text-dark">Providers</p>
                </div>
              </li>
            </ul>
          </ul>
          <img className="w-96 h-full rounded-md border border-2 border-dark my-4 md:hidden" src={BG} alt="landing" />
        </div>
      </div>
      <img className="w-96 xl:w-1/3 h-full rounded-md border border-2 border-dark my-4 hidden md:block" src={BG} alt="landing" />
    </section>
  </main>
);

export default Landing;
