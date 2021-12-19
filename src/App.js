import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsFromStorage = JSON.parse(
      localStorage.getItem('contactsStorage'),
    );
    if (contactsFromStorage !== null) {
      setContacts(contactsFromStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contactsStorage', JSON.stringify(contacts));
  }, [contacts]);

  const getContactFromForm = contact => {
    if (
      contacts.find(
        сontactItem =>
          сontactItem.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert('Such contact exists');
    } else {
      setContacts([contact, ...contacts]);
    }
  };

  const showFilteredContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return filteredContacts;
  };

  const deleteContact = id => {
    setContacts(contacts.filter(obj => obj.id !== id));
  };

  return (
    <div className="App">
      <h1 className="title">Phonebook</h1>
      <ContactForm submitContact={getContactFromForm} />
      <h2 className="title">Contacts</h2>
      <Filter filter={filter} findName={setFilter} />
      <ContactList
        showFilteredContacts={showFilteredContacts}
        deleteContact={deleteContact}
      />
    </div>
  );
}
