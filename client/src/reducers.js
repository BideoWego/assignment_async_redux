import * as Actions from './actions';


const initialState = {
  books: [],
  isFetching: false,
  isOpenModal: false,
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
        isFetching: false
      };
    case Actions.REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case Actions.SET_BOOKS:
      return {
        ...state,
        books: action.data
      };
    case Actions.SET_BOOK:
      return {
        ...state,
        book: action.data
      };
    case Actions.OPEN_MODAL:
      return {
        ...state,
        isOpenModal: true
      };
    case Actions.CLOSE_MODAL:
      return {
        ...state,
        isOpenModal: false
      };
    default:
      return state;
  }
}






