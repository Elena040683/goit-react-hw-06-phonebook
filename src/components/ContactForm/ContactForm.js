import { Component } from 'react';
import { useState } from 'react';
import styles from './ContactForm.module.css';
import actions from '../../redux/contacts/actions';
import { connect, useSelector, useDispatch } from 'react-redux';
import Contact from '../OneContact/OneContact';
import { getContacts } from '../../redux/contacts/selectors';

// class ContactForm extends Component {
function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // state = {
  //   name: '',
  //   number: '',
  // };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  //  handleChange = e => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  const resetForm = () => {
    setName('');
    setNumber('');
  };
  // resetForm = () => {
  //   this.setState({ name: '', number: '' });
  // };
  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      return alert(`${name} is already exist`);
    }
    dispatch(actions.addContact(name, number));
    // addNewContact({ name, number });
    resetForm();
  };
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   addNewContact({ name, number });
  //   resetForm();
  // };

  //  handleSubmit = e => {
  //   e.preventDefault();
  //   // this.props.addNewContact(this.state);
  //   this.props.onAdd(this.state);
  //   this.resetForm();
  // };

  // render() {
  //   const { name, number } = this.state;
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={handleChange}
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          onChange={handleChange}
          required
        />
      </label>
      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
// }

// const mapStateToProps = state => ({
//   contactList: state.contacts,
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     onAdd: ({ name, number }) => dispatch(actions.addContact({ name, number })),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

export default ContactForm;
