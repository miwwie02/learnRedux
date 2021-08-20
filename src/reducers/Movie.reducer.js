import {
    HTTP_MOVIE_FETCHING,
    HTTP_MOVIE_SUCCESS,
    HTTP_MOVIE_FAILED,
  } from "../constants/ActionTypes";

  const initialState = {
    data: null,
    isFetching: false,
    isError: false,
  };

  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = initialState, { type, payload, dataTable }) => {
    switch (type) {
      case HTTP_MOVIE_FETCHING:
        return { ...state, data:null, isFetching: true, isError: false, };
      case HTTP_MOVIE_SUCCESS:
        return { ...state, data:payload, isFetching: false, isError: false, };
      case HTTP_MOVIE_FAILED:
        return { ...state, data:null,  isFetching: false, isError: true, };
      default:
        return state;
    }
  };