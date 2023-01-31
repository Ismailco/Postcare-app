import axios from '../../app/api';
import { isSameDay, isSameWeek, isSameMonth } from '../utils/dateCheck';

const FETCH_TODOS = 'postcare/todos/FETCH_TODOS';

// Action Creators
export const getTodos = () => async (dispatch) => {
  let page = 1;
  let hasNextPage = true;
  let todos = [];

  while (hasNextPage) {
    try {
      /* eslint-disable no-await-in-loop */
      const response = await axios.get(`patient/todos?page=${page}`);
      todos = [...todos, ...response.data.data.data];
      hasNextPage = response.data.data.current_page < response.data.data.last_page;
      page += 1;
    } catch (error) {
      throw new Error(error);
    }
  }
  dispatch({
    type: FETCH_TODOS,
    payload: todos,
  });
};

// Reducer
const initialState = {
  todos: [],
  daily: [],
  weekly: [],
  monthly: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      /* eslint-disable no-case-declarations */
      const today = new Date();
      const daily = action.payload.filter((todo) => isSameDay(today, new Date(todo.due_date)));
      const weekly = action.payload.filter((todo) => isSameWeek(today, new Date(todo.due_date)));
      const monthly = action.payload.filter((todo) => isSameMonth(today, new Date(todo.due_date)));
      return {
        ...state,
        todos: action.payload,
        daily,
        weekly,
        monthly,
      };
    default:
      return state;
  }
};

export default todosReducer;
