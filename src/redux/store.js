import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { contactReducer } from './contacts/reducers';

export const store = createStore(contactReducer, composeWithDevTools());
