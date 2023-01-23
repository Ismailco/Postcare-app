import React from 'react';

const Weekly = ({ todos }) => (
  <article className="flex justify-center items-center h-screen text-2xl font-bold">
    {todos.length === 0
      ? 'No tasks for today check next week todos'
      : todos.map((todo) => (
          <ul key={todo.id}>
            <li>{todo.title}</li>
          </ul>
        ))}
  </article>
);

export default Weekly;
