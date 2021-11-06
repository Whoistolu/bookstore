import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer, { initializeBooks } from './books/books';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

store.dispatch(initializeBooks([1, 2, 3]));

export default store;
