import { changeFilter } from '../../redux/contacts/actions';
import styles from './Filter.module.css';
import { connect } from 'react-redux';

const Filter = ({ value, onChange }) => (
  <label className={styles.filterLabel}>
    Find contacts by name
    <input
      className={styles.filterInput}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

const mapDispatchToProps = dispatch => {
  return {
    onChange: e => dispatch(changeFilter(e.target.value)),
  };
};

export default connect(null, mapDispatchToProps)(Filter);
