import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from './logger';
import bookReducer from './books/books';
import checkStatusReducer from './categories/categories';

const reducer = combineReducers({
  bookReducer,
  checkStatusReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
console.log(store.getState());
export default store;
