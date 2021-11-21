import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/add', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction('contact/delete');
const changeFilter = createAction('contact/change_filter');

// const addContact = ({ name, number }) => ({
//   type: 'contact/add',
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContact = contactId => ({
//   type: 'contact/delete',
//   payload: contactId,
// });

// const changeFilter = contacts => ({
//   type: 'contact/change_filter',
//   payload: contacts,
// });

export default { addContact, deleteContact, changeFilter };
