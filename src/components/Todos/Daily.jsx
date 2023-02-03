import React from 'react';
import { useDispatch } from 'react-redux';
import { Circle } from 'rc-progress';
import { todayDate, getTime } from '../../constants';
import { setCompleted } from '../../redux/slice/todos';

const Daily = ({ todos }) => {
  const dispatch = useDispatch();

  const handleComplete = (e) => {
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
      <h3 className="w-full bg-[#6B7280] py-4 px-6 text-white text-xl font-bold rounded-md my-2 border border-light">{todayDate}</h3>
      <div className="flex justify-between items-start w-full">
        <div className="w-full">
          <h1 className="text-xl font-bold my-2">Todo List</h1>
          {todos.length === 0
            ? 'No tasks for today check next week todos'
            : todos.map((todo) => (
                <div key={`${todo.id} daily`} className="flex w-full mb-2 items-center justify-center">
                  <label htmlFor="todo" className="flex items-center justify-between border p-4 rounded-md w-full">
                    <input type="checkbox" id="todo" className="hidden mr-10" />
                    <div className="w-1/4 md:1/2">
                      <button id={todo.slug} type="button" className={`${todo.completed === '1' ? 'bg-green-700' : 'bg-white'} p-2.5 flex items-center justify-center rounded-md border border-black`} onClick={(e) => handleComplete(e)}>
                        <p className="text-2xl text-gray-500 hidden">✓</p>
                      </button>
                    </div>
                    <p className={`${todo.completed === '1' ? 'line-through' : 'no-line-through'} w-1/2 text-gray-900 font-semibold`}>{todo.title}</p>
                    <p className={`${todo.completed === '1' ? 'line-through' : 'no-line-through'} w-4/5 md:1/2 text-gray-900 text-sm`}>{todo.description}</p>
                    <p className={`${todo.completed === '1' ? 'line-through' : 'no-line-through'} w-1/3 text-center text-gray-900 text-sm`}>{getTime(todo.due_date)}</p>
                  </label>
                </div>
              ))}
        </div>
        <div>
          <div className="">
            <Circle className="hidden md:block" percent={`${completStatus().total ? completStatus().complete : '100'}`} strokeWidth={10} style={{ width: 200, margin: 20 }} trailWidth={10} strokeColor={completStatus().total ? completStatus().color[completStatus().complete] : 'green'} />
            <p className="hidden md:block text-center text-2xl font-bold relative -top-32 left-1.5">{completStatus().total ? `${Math.round(completStatus().complete)}%` : '100%'}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Photo Upload</h2>
            <div className="p-10 my-4 m-auto border border-4 border-dark border-dotted text-center">
              <i className="fas fa-upload text-gray-500" />
              <p className="text-sm font-bold">
                Drag and Drop here
                <br />
                or
              </p>
              <button type="button" className="text-blue-600 font-bold">
                Upload
              </button>
            </div>
            <p className="text-center text-sm">Accepted File Types: jpeg, png only</p>
            <button type="button" className="bg-dark text-white font-bold py-2 px-4 rounded w-full my-4">
              UPLOAD
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-xl font-bold my-4">Photo Gallery</h2>
    </article>
  );
};

export default Daily;
