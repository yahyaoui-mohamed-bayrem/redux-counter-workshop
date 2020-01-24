import reducer from './reducer/reducer.js';
import { createStore } from 'redux';

export const store = createStore (reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());