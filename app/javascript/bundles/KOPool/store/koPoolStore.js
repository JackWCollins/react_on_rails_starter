import { createStore } from 'redux';
import koPoolReducer from '../reducers/koPoolReducer';

const configureStore = (railsProps) => (
  createStore(koPoolReducer, railsProps)
);

export default configureStore;