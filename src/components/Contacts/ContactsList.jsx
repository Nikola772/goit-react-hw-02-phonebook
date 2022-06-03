import PropTypes from "prop-types";
import styles from './ContactsList.module.css'

const ContactsList = ({contacts,  onDeleteContacts}) => (

<ul className={styles.ul__list}>{contacts.map(({contact, name, number, id}) => (
    <li key={id} className={styles.contacts__item}>
        <p>{name}: {number}</p>
        <button onClick={() => onDeleteContacts(id)}>Видалити</button>
    </li>
))}
</ul>
);

ContactsList.propTypes = {
    onDeleteContacts: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
  }

export default ContactsList;