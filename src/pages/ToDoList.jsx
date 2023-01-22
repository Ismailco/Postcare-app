import React, { useState, useEffect } from 'react';
import api from '../app/api';
import { Daily, Weekly, Monthly } from '../components/Todos';

const ToDoList = () => {
  const [activeBtn, setActiveBtn] = useState('daily-btn');

  const handleClick = (e) => {
    const { id } = e.target;
    setActiveBtn(id);
  };

  useEffect(() => {
    document.title = 'Dashboard - Postcare';
    api
      .get('patients/todos')
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <main className="flex flex-col m-4 w-full">
      <section className="my-6">
        <h1 className="text-2xl font-bold mb-4">To Do List</h1>
        <p>Your secure, online, healthcare tracking site. Helping you manage your personal health information with your practices, anytime and anywhere.</p>
      </section>
      <section className="my-6">
        <article className="flex justify-end items-center">
          <button id="monthly-btn" className={`${activeBtn === 'monthly-btn' ? 'text-black/80 bg-light' : 'bg-dark text-white hover:bg-light hover:text-black/80'} font-bold py-2 px-4 rounded-full mr-4`} onClick={(e) => handleClick(e)}>
            Monthly
          </button>
          <button id="weekly-btn" className={`${activeBtn === 'weekly-btn' ? 'text-black/80 bg-light' : 'bg-dark text-white hover:bg-light hover:text-black/80'} font-bold py-2 px-4 rounded-full mr-4`} onClick={(e) => handleClick(e)}>
            Weekly
          </button>
          <button id="daily-btn" className={`${activeBtn === 'daily-btn' ? 'text-black/80 bg-light' : 'bg-dark text-white hover:bg-light hover:text-black/80'} font-bold py-2 px-4 rounded-full mr-4`} onClick={(e) => handleClick(e)}>
            Daily
          </button>
        </article>
        <article className="my-6">
          <div className={`${activeBtn === 'daily-btn' ? 'block' : 'hidden'} flex justify-center items-center my-4 rounded-xl min-h-full w-full bg-dark`}>
            <Daily />
          </div>
          <div className={`${activeBtn === 'weekly-btn' ? 'block' : 'hidden'} flex justify-center items-center my-4 rounded-xl min-h-full w-full bg-dark`}>
            <Weekly />
          </div>
          <div className={`${activeBtn === 'monthly-btn' ? 'block' : 'hidden'} flex justify-center items-center my-4 rounded-xl min-h-full w-full bg-dark`}>
            <Monthly />
          </div>
        </article>
      </section>
    </main>
  );
};
export default ToDoList;
