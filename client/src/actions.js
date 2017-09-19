export const REQUESTING = 'REQUESTING';
export const REQUEST_SUCCEEDED = 'REQUEST_SUCCEEDED';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SET_BOOKS = 'SET_BOOKS';
export const SET_BOOK = 'SET_BOOK';


export function requesting() {
  return {
    type: REQUESTING
  };
}


export function requestSucceeded() {
  return {
    type: REQUEST_SUCCEEDED
  };
}


export function requestFailed(error) {
  return {
    type: REQUEST_FAILED,
    error
  };
}


export function openModal() {
  return {
    type: OPEN_MODAL
  }
}


export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}


export function setBooks(data) {
  return {
    type: SET_BOOKS,
    data
  };
}


export function setBook(data) {
  return {
    type: SET_BOOK,
    data
  };
}


export function getBooks(q) {
  return async dispatch => {
    dispatch(requesting());

    q = encodeURIComponent(q);

    try {
      let response = await fetch(`/api/v1/search?q=${ q }`);
      let json = await response.json();
      dispatch(requestSucceeded(json));
      dispatch(setBooks(json));
    } catch(e) {
      dispatch(requestFailed(e));
    }
  };
}


export function getBook(id) {
  return async dispatch => {
    dispatch(requesting());

    console.log(id);

    try {
      let response = await fetch(`/api/v1/books/${ id }`);
      let json = await response.json();
      dispatch(requestSucceeded());
      dispatch(setBook(json));
      dispatch(openModal());
    } catch(e) {
      dispatch(requestFailed(e));
    }
  };
}








