import {
    HTTP_HELLO_FETCHING,
    HTTP_HELLO_SUCCESS,
    HTTP_HELLO_FAILED,
    HTTP_HELLO_CLEAR,
    HTTP_HELLO_BY_ID_SUCCESS,
  } from "../constants/ActionTypes";

  const setStateHelloToFetching = () => ({
      type: HTTP_HELLO_FETCHING,
  });

export const setStateHelloToSuccess = (payload) => ({
    type: HTTP_HELLO_SUCCESS,
    payload,
});

export const addHello = (values , history) => {
    return (dispatch) => {
        alert(values);
        dispatch(setStateHelloToSuccess(values));
    }
}