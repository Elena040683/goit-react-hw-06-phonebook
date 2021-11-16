import { combineReducers } from 'redux';
import { addContact, changeFilter } from './actions';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsList = (state = initialState, action) => {
  switch (action.type) {
    case 'contact/add':
      return [...state, action.payload];

    default:
      return state;
  }
};

const contactFilter = (state = '', action) => {
  switch (action.type) {
    case 'contact/filter':
      return action.payload;

    default:
      return state;
  }
};

export const contactReducer = combineReducers({
  contacts: contactsList,
  filter: contactFilter,
});
