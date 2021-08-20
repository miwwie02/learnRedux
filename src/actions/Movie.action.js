import axios from 'axios'

import {
    HTTP_MOVIE_FETCHING,
    HTTP_MOVIE_SUCCESS,
    HTTP_MOVIE_FAILED,
  } from "../constants/ActionTypes";

  const setStateMovieToFetching = () => ({
      type: HTTP_MOVIE_FETCHING,

  });

export const setStateMovieToSuccess = (payload) => ({
    type: HTTP_MOVIE_SUCCESS,
    payload
});
export const setStateMovieToFAILED = () => ({
    type: HTTP_MOVIE_FAILED,
});

export const addMovie = (values , history) => {
    return (dispatch) => {
        alert(values);
        dispatch(setStateMovieToSuccess(values));
    }
}

export const getMovie = () =>{
    return dispatch => {
        dispatch(setStateMovieToFetching());
        doGetMovie(dispatch);
    }
}

    const doGetMovie = async dispatch => {
        try {
            let result  = await axios.get(`https://localhost:44313/api/mastermovies/getall`);
            dispatch(setStateMovieToSuccess(result.data));
        } catch(err){
            alert(JSON.stringify(err));
            dispatch(setStateMovieToFAILED);
        }
    }