import { createStore, combineReducers, applyMiddleware } from 'redux';
import {defaultStore} from './defaultStore/reducer.js';

import thunk from 'redux-thunk'; //处理异步

var store = createStore(
    combineReducers({defaultStore}),
    applyMiddleware(thunk)
);

export default store;