import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import todosReducer from '../slice/todos';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: [thunk, logger],
});

export default store;
