import axios from '../../app/api';
import { isSameDay, isSameWeek, isSameMonth } from '../utils/dateCheck';

const FETCH_TODOS = 'postcare/todos/FETCH_TODOS';

// Action Creators
export const getTodos = () => async (dispatch) => {
  try {
    const response = await axios.get('patient/todos');
    dispatch({
      type: FETCH_TODOS,
      payload: response.data.data,
    });
  } catch (error) {
    throw new Error(error);
  }
};

// Reducer
const initialState = {
  todos: [],
  daily: [],
  weekly: [],
  monthly: [],
  data: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      const today = new Date();
      const daily = action.payload.data.filter((todo) => isSameDay(today, new Date(todo.due_date)));
      const weekly = action.payload.data.filter((todo) => isSameWeek(today, new Date(todo.due_date)));
      const monthly = action.payload.data.filter((todo) => isSameMonth(today, new Date(todo.due_date)));
      return {
        ...state,
        todos: action.payload.data,
        daily,
        weekly,
        monthly,
        data: {
          currentPage: action.payload.current_page,
          lastPage: action.payload.last_page,
          firstPageUrl: action.payload.first_page_url,
          lastPageUrl: action.payload.last_page_url,
          nextPageUrl: action.payload.next_page_url,
          prevPageUrl: action.payload.prev_page_url,
          totalTodos: action.payload.total,
        },
      };
    default:
      return state;
  }
};

export default todosReducer;
