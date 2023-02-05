import React from 'react';
import { Link } from 'react-router-dom';
import {
  hero, BG, checkmark, downloads, users, heart, treatment, iphone, customer1, customer2, customer3,
} from '../assets/img';

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
              <img className="w-6 mr-2 h-6" src={checkmark} alt="checkmark" />
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </li>
            <li className="flex justify-start items-start py-2">
              <img className="w-6 mr-2 h-6" src={checkmark} alt="checkmark" />
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </li>
            <li className="flex justify-start items-start py-2">
              <img className="w-6 mr-2 h-6" src={checkmark} alt="checkmark" />
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
                <img className="w-10 mr-2 h-10" src={users} alt="users" />
                <div>
                  <p className="font-bold text-xl">1.5M</p>
                  <p className="text-dark">Current Active Users</p>
                </div>
              </li>
              <li className="flex justify-start items-start md:py-10">
                <img className="w-10 mr-2 h-10" src={heart} alt="heart care" />
                <div>
                  <p className="font-bold text-xl">20+</p>
                  <p className="text-dark">Country Covered</p>
                </div>
              </li>
            </ul>
            <ul className="py-2">
              <li className="flex justify-start items-start md:py-10 md:ml-10">
                <img className="w-10 mr-2 h-10" src={downloads} alt="downloads" />
                <div>
                  <p className="font-bold text-xl">5.5M+</p>
                  <p className="text-dark">Total Downloads</p>
                </div>
              </li>
              <li className="flex justify-start items-start md:py-10 md:ml-10">
                <img className="w-10 mr-2 h-10" src={treatment} alt="treatment" />
                <div>
                  <p className="font-bold text-xl">200k+</p>
                  <p className="text-dark">Providers</p>
                </div>
              </li>
            </ul>
          </ul>
          <div className="w-full h-full rounded-md border border-2 border-dark my-4 flex md:hidden justify-center items-end bg-light/30">
            <img className="h-1/2 w-1/2 pt-10" src={iphone} alt="iphone" />
          </div>
        </div>
      </div>
      <div className="w-1/3 h-96 rounded-md border border-2 border-dark my-4 hidden md:flex justify-center items-end bg-light/30">
        <img className="h-2/3 w-fit" src={iphone} alt="iphone" />
      </div>
    </section>
    <section className="w-full flex flex-col justify-around items-center py-4 bg-light">
      <h2 className="text-xl font-bold text-black/80 w-2/3 md:w-full text-center py-2">Testimonials from Satisfied Customers</h2>
      <p className="text-center w-2/3 md:w-full py-2">You're in good company, trusted by the world's best doctors.</p>
      <div className="w-4/5 flex flex-col md:flex-row justify-around items-center mb-10">
        <div className="w-4/5 flex flex-col justify-center items-center -mt-4 mx-4 xl:mx-10">
          <img className="w-20 h-20 rounded-full relative top-10" src={customer1} alt="avatar" />
          <div className="bg-white p-2">
            <h3 className="text-lg font-bold text-black/80 text-center pt-10">Loki Bright</h3>
            <p className="text-center py-2">Auctor netus sociis sit nulla. Convallis morbi integer tellus, donec habitant fermentum at pharetra vitae.</p>
          </div>
        </div>
        <div className="w-4/5 flex flex-col justify-center items-center -mt-4 mx-4 xl:mx-10">
          <img className="w-20 h-20 rounded-full relative top-10" src={customer2} alt="avatar" />
          <div className="bg-white p-2">
            <h3 className="text-lg font-bold text-black/80 text-center pt-10">Loki Bright</h3>
            <p className="text-center py-2">Auctor netus sociis sit nulla. Convallis morbi integer tellus, donec habitant fermentum at pharetra vitae.</p>
          </div>
        </div>
        <div className="w-4/5 flex flex-col justify-center items-center  -mt-4 mx-4 xl:mx-10">
          <img className="w-20 h-20 rounded-full relative top-10" src={customer3} alt="avatar" />
          <div className="bg-white p-2">
            <h3 className="text-lg font-bold text-black/80 text-center pt-10">Loki Bright</h3>
            <p className="text-center py-2">Auctor netus sociis sit nulla. Convallis morbi integer tellus, donec habitant fermentum at pharetra vitae.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Landing;
