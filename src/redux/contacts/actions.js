import { v4 as uuidv4 } from 'uuid';

export const addContact = ({ name, number }) => ({
  type: 'contact/add',
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

export const deleteContact = contactId => ({
  type: 'contact/delete',
  payload: contactId,
});

export const changeFilter = value => ({
  type: 'contact/change_filter',
  payload: value,
});
