export const addContact = contact => ({
  type: 'contact/add',
  payload: contact,
});

export const changeFilter = value => ({
  type: 'contact/filter',
  payload: value,
});
