import styles from './OneContact.module.css';

const Contact = ({ name, number, onDelete }) => (
  <div className={styles.item}>
    <p className={styles.text}>
      {name}:{number}
    </p>
    <button className={styles.btn} type="button" onClick={onDelete}>
      Delete
    </button>
  </div>
);

export default Contact;
