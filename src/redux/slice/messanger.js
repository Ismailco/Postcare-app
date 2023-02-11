import axios from '../../app/api';

const GET_ALL_MESSAGES = 'postcare/messanger/GET_ALL_MESSAGES';
const SEND_MESSAGE = 'postcare/messanger/SEND_MESSAGE';
// const DELETE_MESSAGE = 'postcare/messanger/DELETE_MESSAGE';
const GET_UNREAD_MESSAGES = 'postcare/messanger/GET_UNREAD_MESSAGES';
// const MARK_AS_READ = 'postcare/messanger/MARK_AS_READ';

export const getMessages = () => (dispatch) => {
  axios.get('messages').then((response) => {
    dispatch({ type: GET_ALL_MESSAGES, payload: response.data.messages });
  });
};

export const sendMessage = (message, id) => (dispatch) => {
  axios.post(`messages/${id}/send`, { text: message }).then((response) => {
    dispatch({ type: SEND_MESSAGE, payload: response.data });
  });
};

export const getUnreadMessages = () => (dispatch) => {
  axios.get('messages/unread').then((response) => {
    dispatch({ type: GET_UNREAD_MESSAGES, payload: response.data });
  });
};

const initialState = {
  messages: [],
  unreadMessages: [],
};

const messangerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    case GET_UNREAD_MESSAGES:
      return {
        ...state,
        unreadMessages: action.payload,
      };
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

export default messangerReducer;
