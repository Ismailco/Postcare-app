import React from 'react';
import { Circle } from 'rc-progress';
import { todayDate } from '../../constants';

const Daily = ({ todos }) => {
  const handleComplete = (e) => {
    const index = e.target.id - 1;
    if (todos[index].completed === false) {
      todos[index].completed = true;
      setLocalStorage('todos', todos);
      e.target.style.backgroundColor = 'green';
      e.target.nextSibling.style.textDecoration = 'line-through';
    } else {
      todos[index].completed = false;
      setLocalStorage('todos', todos);
      e.target.style.backgroundColor = 'white';
      e.target.nextSibling.style.textDecoration = 'none';
    }
  };
  return (
    <article className="flex flex-col w-full justify-start items-start h-fit mx-4">
      <h1 className="text-2xl font-bold my-4">{todayDate}</h1>
      <h2 className="text-xl font-bold my-4">todo list</h2>
      <div className="flex justify-between items-start w-full">
        {todos.length === 0
          ? 'No tasks for today check next week todos'
          : todos.map((todo) => (
              <div key={todo.id} className="flex w-96 mb-2 ">
                <label htmlFor="todo" className="flex items-center border p-2 rounded w-full">
                  <input type="checkbox" id="todo" className="hidden" />
                  <button id={todo.id} type="button" className={`${todo.completed ? 'bg-green-700' : 'bg-gray-100'} p-2 flex items-center justify-center rounded border-2 border-gray-500 mr-2 shadow-gray-500 shadow-inner`} onClick={(e) => handleComplete(e)}>
                    <p className="text-2xl text-gray-500 hidden">✓</p>
                  </button>
                  <p className={`text-gray-900`}>{todo.title}</p>
                </label>
              </div>
            ))}
        <Circle className="hidden md:flex" percent={`${5}`} strokeWidth={10} style={{ width: 200, margin: 20 }} trailWidth={10} strokeColor={'red'} />
      </div>
      <h2 className="text-xl font-bold my-4">Upload photo</h2>
    </article>
  );
};

export default Daily;
