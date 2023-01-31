import React from 'react';
import { useDispatch } from 'react-redux';
import { Circle } from 'rc-progress';
import { todayDate } from '../../constants';
import { setCompleted } from '../../redux/slice/todos';

const Weekly = ({ todos }) => {
  const dispatch = useDispatch();

  const handleComplete = (e) => {
    console.log(e.target.id);
    dispatch(setCompleted(e.target.id));
    e.target.style.backgroundColor = 'green';
    e.target.nextSibling.style.textDecoration = 'line-through';
  };

  const completStatus = () => {
    const completed = todos.filter((todo) => todo.completed === '1');
    return {
      complete: (completed.length * 100) / todos.length,
      color: {
        0: 'red',
        20: 'yellow',
        40: 'magenta',
        50: 'orange',
        70: 'blue',
        100: 'green',
      },
      total: todos.length,
    };
  };

  return (
    <article className="flex flex-col w-full justify-start items-start h-fit mx-4">
      <h1 className="text-2xl font-bold my-4">{todayDate}</h1>
      <h2 className="text-xl font-bold my-4">todo list</h2>
      <div className="flex justify-between items-start w-full">
        <div className="w-full">
          {todos.length === 0
            ? 'No tasks for today check next week todos'
            : todos.map((todo) => (
                <div key={todo.id} className="flex w-full mb-2 items-center">
                  <label htmlFor="todo" className="flex items-start border p-2 rounded w-full">
                    <input type="checkbox" id="todo" className="hidden" />
                    <button id={todo.slug} type="button" className={`${todo.completed === '1' ? 'bg-green-700' : 'bg-gray-100'} p-2 flex items-center justify-center rounded border-2 border-transparent mr-2 mt-1 shadow-gray-500 shadow-inner`} onClick={(e) => handleComplete(e)}>
                      <p className="text-2xl text-gray-500 hidden">✓</p>
                    </button>
                    <div className={`${todo.completed === '1' ? 'line-through' : 'no-line-through'}`}>
                      <p className={`text-gray-900 font-semibold`}>{todo.title}</p>
                      <p className={`text-gray-900 text-sm`}>{todo.description}</p>
                    </div>
                  </label>
                </div>
              ))}
        </div>
        <Circle className="hidden md:flex" percent={`${completStatus().total ? completStatus().complete : '100'}`} strokeWidth={10} style={{ width: 200, margin: 20 }} trailWidth={10} strokeColor={completStatus().total ? completStatus().color[completStatus().complete] : 'green'} />
      </div>
      <h2 className="text-xl font-bold my-4">Upload photo</h2>
    </article>
  );
};

export default Weekly;
