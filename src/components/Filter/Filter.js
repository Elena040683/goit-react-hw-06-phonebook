import actions from '../../redux/contacts/actions';
import styles from './Filter.module.css';
import { connect, useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';

// const Filter = ({ contacts, onChange }) => (
const Filter = () => {
  const contacts = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={styles.filterLabel}>
      Find contacts by name
      <input
        className={styles.filterInput}
        type="text"
        value={contacts}
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
      />
    </label>
  );
};

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(actions.changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
export default Filter;
