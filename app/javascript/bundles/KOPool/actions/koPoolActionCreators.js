/* eslint-disable import/prefer-default-export */

import {
  KO_POOL_NAME_UPDATE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE } from "../constants/koPoolConstants";

function userLoginRequest () {
  return {type: USER_LOGIN_REQUEST}
}

function userLoginSuccess (user) {
  return {type: USER_LOGIN_SUCCESS, user}
}

function userLoginFailure (error) {
  return {type: USER_LOGIN_FAILURE, error}
}

export function login (loginParams) {
  console.log("In login method in action creator", loginParams);

  // The error is here because we are returning a function instead of a plain object
  // I think we need to add `redux-thunk` https://github.com/gaearon/redux-thunk/issues/146
  return function (dispatch) {
    dispatch(userLoginRequest());
    apiClient.loginUser(loginParams)
      .then((resp) => { dispatch(userLoginSuccess(loginParams))})
      .catch((error) => { dispatch(userLoginFailure(error))})
  }
};

const apiClient = {
  loadPeople: function () {
    return {
      then: function (cb) {
        setTimeout( () => {
          cb(JSON.parse(localStorage.people || '[]'))
        }, 1000);
      }
    }
  },

  loginUser: function (loginParams) {
    fetch('/sessions', {
      credentials: 'include', // For CORS https://github.com/github/fetch
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Hubot',
        login: 'hubot',
      })
    })
      .then(checkStatus)
      .then(parseJSON)
  }
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}