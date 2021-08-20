import {
    HTTP_HELLO_FETCHING,
    HTTP_HELLO_SUCCESS,
    HTTP_HELLO_FAILED,
    HTTP_HELLO_CLEAR,
    HTTP_HELLO_BY_ID_SUCCESS,
  } from "../constants/ActionTypes";

  const initialState = {
    result: null,
    isFetching: false,
    isError: false,
    data: null,
    loader: false,
  };

  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = initialState, { type, payload, dataTable }) => {
    switch (type) {
      case HTTP_HELLO_FETCHING:
        return { ...state, result: null, isFetching: true, isError: false, loading: true };
      case HTTP_HELLO_SUCCESS:
        return { ...state, result: payload, isFetching: false, isError: false, loading: false };
      case HTTP_HELLO_FAILED:
        return { ...state, result: null, isFetching: false, isError: true, loading: false };
      case HTTP_HELLO_CLEAR:
        return { ...state, result: null, data: null, isFetching: false, isError: false, loading: false };
      case HTTP_HELLO_BY_ID_SUCCESS:
        return { ...state, data: payload, isFetching: false, isError: false, loading: false };
      default:
        return state;
    }
  };