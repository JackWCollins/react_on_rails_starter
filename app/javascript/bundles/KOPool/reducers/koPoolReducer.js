import { combineReducers } from 'redux';
import { KO_POOL_NAME_UPDATE } from "../constants/koPoolConstants";

const season = (state = '', action) => {
  switch (action.type) {
    case KO_POOL_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const koPoolReducer = combineReducers({ season });

export default koPoolReducer;