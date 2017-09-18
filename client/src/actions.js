export const REQUESTING = 'REQUESTING';
export const REQUEST_SUCCEEDED = 'REQUEST_SUCCEEDED';
export const REQUEST_FAILED = 'REQUEST_FAILED';


export function requesting() {
  return {
    type: REQUESTING
  };
}


export function requestSucceeded(data) {
  return {
    type: REQUEST_SUCCEEDED,
    data
  };
}


export function requestFailed(error) {
  return {
    type: REQUEST_FAILED,
    error
  };
}


export function getBooks() {
  return async dispatch => {
    dispatch(requesting());

    try {
      let response = await fetch('/api/v1/search?q=Star');
      let json = await response.json();
      dispatch(requestSucceeded(json));
    } catch(e) {
      dispatch(requestFailed(e));
    }
  };
}








