import styles from './ContactList.module.css';

import Contact from '../OneContact/OneContact';
import { connect } from 'react-redux';
import { addContact, deleteContact } from '../../redux/contacts/actions';

const ContactList = ({ contacts, onDelete }) => (
  <ul className={styles.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <Contact name={name} number={number} onDelete={() => onDelete(id)} />
      </li>
    ))}
  </ul>
);

// const mapStateToProps = state => ({
//   const { items, filter } = state.contacts;

// });

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactList);
