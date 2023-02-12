import axios from '../../app/api';

const FETCH_RECOVERY = 'postcare/recovery/FETCH_RECOVERY';

// Action Creators
export const getRecovery = () => async (dispatch) => {
  let page = 1;
  let hasNextPage = true;
  let recovery = [];

  while (hasNextPage) {
    try {
      /* eslint-disable no-await-in-loop */
      const response = await axios.get(`patient/recovery-plans?page=${page}`);
      recovery = [...recovery, ...response.data.data.data];
      hasNextPage = response.data.data.current_page < response.data.data.last_page;
      page += 1;
    } catch (error) {
      throw new Error(error);
    }
  }
  dispatch({
    type: FETCH_RECOVERY,
    payload: recovery,
  });
};

// Reducer
const initialState = {
  recovery: [],
};

const recoveryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_RECOVERY:
      return {
        ...state,
        recovery: action.payload,
      };
    default:
      return state;
  }
};

export default recoveryReducer;
