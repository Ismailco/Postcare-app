import React from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../assets/img/index';

const Messanger = () => (
  <main className="flex flex-col m-4 w-full">
    <section className="m-4">
      <h1 className="text-2xl font-bold mb-4">Messenger</h1>
      <p>Your secure, online, healthcare tracking site. Helping you manage your personal health information with your practices, anytime and anywhere.</p>
    </section>
    <section className="flex flex-col justify-start items-center m-4">
      {/* This section units need to change after getting the API (or dumy data) from david */}
      <article className="flex flex-col md:flex-row justify-between items-center border p-4">
        <img className="rounded-full mr-4" src={profile} alt="profile" />
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start md:w-3/4 md:mr-4">
          {/* The link redirect to the Chat of the specefic provider (change it later) */}
          <Link to="/messanger/1">
            <h2 className="text-xl font-bold hover:underline">Provider Name</h2>
          </Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
        </div>
        <div className="flex md:flex-col self-end md:self-start mt-4">
          <p className="mr-2 md:mr-0 md:mb-2 text-dark font-bold text-sm">3:00 PM</p>
          <p className="px-2 w-fit bg-dark rounded-full font-bold">2</p>
        </div>
      </article>
      <article className="flex flex-col md:flex-row justify-between items-center border p-4">
        <img className="rounded-full mr-4" src={profile} alt="profile" />
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start md:w-3/4 md:mr-4">
          {/* The link redirect to the Chat of the specefic provider (change it later) */}
          <Link to="/messanger/1">
            <h2 className="text-xl font-bold hover:underline">Provider Name</h2>
          </Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
        </div>
        <div className="flex md:flex-col self-end md:self-start mt-4">
          <p className="mr-2 md:mr-0 md:mb-2 text-dark font-bold text-sm">3:00 PM</p>
          <p className="px-2 w-fit bg-dark rounded-full font-bold">2</p>
        </div>
      </article>
      <article className="flex flex-col md:flex-row justify-between items-center border p-4">
        <img className="rounded-full mr-4" src={profile} alt="profile" />
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start md:w-3/4 md:mr-4">
          {/* The link redirect to the Chat of the specefic provider (change it later) */}
          <Link to="/messanger/1">
            <h2 className="text-xl font-bold hover:underline">Provider Name</h2>
          </Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
        </div>
        <div className="flex md:flex-col self-end md:self-start mt-4">
          <p className="mr-2 md:mr-0 md:mb-2 text-dark font-bold text-sm">3:00 PM</p>
          <p className="px-2 w-fit bg-dark rounded-full font-bold">2</p>
        </div>
      </article>
    </section>
  </main>
);

export default Messanger;
