import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

function ContactList({ showFilteredContacts, deleteContact }) {
  return (
    <ul className={style.contactsList}>
      {showFilteredContacts().map(({ id, name, number }) => (
        <li className={style.item} key={id}>
          <span>
            {name}: {number}
          </span>
          <button
            className={style.deleteBtn}
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  showFilteredContacts: PropTypes.func,
  deleteContact: PropTypes.func,
};

export default ContactList;
