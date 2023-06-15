import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSelector';
import s from './App.module.css';

export const App = ()=>{
  const contacts = useSelector(getContacts);

  return (
    <div className={s.containerForm}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm   contacts={contacts}/>
        <h2 className={s.title}>Contacts</h2>
          <Filter  />
          <ContactList />
      </div>
  )
}