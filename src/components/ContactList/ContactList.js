import styles from './ContactList.module.css';
import Contact from '../OneContact/OneContact';
import { connect, useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/actions';
import { getVisibleContacts } from '../../redux/contacts/selectors';

// const ContactList = ({ contacts, onDeleteContact }) => (
const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(actions.deleteContact(id));
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact
            name={name}
            number={number}
            onDelete={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
};

// const visibleContacts = (contacts, filter) => {
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

// const mapStateToProps = ({ contacts, filter }) => ({
//   contacts: visibleContacts(contacts, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(actions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

export default ContactList;
