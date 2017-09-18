import * as Actions from './actions';


const initialState = {
  books: [],
  isFetching: false,
  error: null
};


export default function books(state = initialState, action) {
  switch (action.type) {
    case Actions.REQUESTING:
      return {
        ...state,
        isFetching: true
      };
    case Actions.REQUEST_SUCCEEDED:
      return {
        ...state,
        isFetching: false,
        books: action.data
      };
    case Actions.REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}






