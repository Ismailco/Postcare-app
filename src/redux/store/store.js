import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import todosReducer from '../slice/todos';
import recoveryReducer from '../slice/recovery';

let middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, logger];
}

const store = configureStore({
  reducer: {
    todos: todosReducer,
    recovery: recoveryReducer,
  },
  middleware: [...middleware],
});

export default store;
