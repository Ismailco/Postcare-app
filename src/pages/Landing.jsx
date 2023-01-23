import React from 'react';
import { Link } from 'react-router-dom';
import { hero } from '../assets/img';

const Landing = () => (
  <main className="w-full">
    <section className="w-full flex flex-col-reverse md:flex-row justify-center items-center my-4">
      <div className="w-4/5 my-4 md:w-1/3">
        <h1 className="text-4xl font-bold text-primary">We make it easier for patients to recover from surgery at home</h1>
        <div>
          <Link to="/signup">
            <button className="duration-500 bg-primary text-white rounded-full py-2 px-4 mt-4 hover:bg-accent-100">Get Started</button>
          </Link>
          <Link to="/dashboard">
            <button className="duration-500 bg-secondary text-white rounded-full py-2 px-4 mt-4 ml-4 hover:bg-accent-100">Learn More</button>
          </Link>
        </div>
      </div>
      <img className="w-96 h-full border" src={hero} alt="landing" />
    </section>
    <section className="flex justify-center items-center text-2xl font-bold w-full h-96 bg-light"></section>
  </main>
);

export default Landing;
