import React from 'react';
import { useDispatch } from 'react-redux';
import { Circle } from 'rc-progress';
import { todayDate } from '../../constants';
import { setCompleted } from '../../redux/slice/todos';
import { useEffect, useState } from 'react';

const Monthly = ({ todos }) => {
  const dispatch = useDispatch();
  const [sortedTodos, setSortedTodos] = useState([]);

  useEffect(() => {
    const sorted = todos.sort((a, b) => new Date(a.due_date) - new Date(b.due_date));
    setSortedTodos(sorted);
  }, [todos]);

  const groupedTodos = sortedTodos.reduce((acc, todo) => {
    const date = new Date(todo.due_date).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(todo);
    return acc;
  }, {});

  const getTime = (date) => new Date(date).toLocaleTimeString();

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
    <article className="flex flex-col w-full justify-start items-start h-fit">
      <div className="flex flex-col justify-between items-start w-full">
        <div className="flex justify-between items-center w-full p-4 bg-light rounded-md border borger-dark font-bold">
          <p className="w-1/4 mr-4">Check box</p>
          <p className="w-1/2 mr-4">Tracker</p>
          <p className="w-4/5 mr-4">Detail</p>
          <p className="w-1/3 text-center">Time</p>
        </div>
        {todos.length === 0
          ? 'No tasks for today check next week todos'
          : Object.entries(groupedTodos).map(([date, tasks]) => (
              <React.Fragment key={date}>
                <h3 className="w-full bg-[#6B7280] py-4 px-6 text-white rounded-md my-2 border border-light">{date}</h3>
                {tasks.map((todo) => (
                  <div key={todo.id} className="flex w-full mb-2 items-center justify-center">
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
              </React.Fragment>
            ))}
      </div>
    </article>
  );
};
export default Monthly;
