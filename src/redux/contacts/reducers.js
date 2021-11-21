import { combineReducers } from 'redux';
import actions from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactReducer = createReducer(initialState, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export const filterReducer = createReducer('', {
  'contact/change_filter': (_, action) => action.payload,
});

// export const contactReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contact/add':
//       return [...state, action.payload];

//     case 'contact/delete':
//       return state.filter(({ id }) => id !== action.payload);

//     default:
//       return state;
//   }
// };

// export const filterReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'contact/change_filter':
//       return action.payload;

//     default:
//       return state;
//   }
// };
