import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './contacts/reducers';

export const store = createStore(rootReducer, composeWithDevTools());
