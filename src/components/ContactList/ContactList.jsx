import s from './ContactList.module.css';
import { useSelector , useDispatch} from 'react-redux';
import { getContacts } from 'redux/contactsSelector';
import {  deleteContact, fetchContacts } from 'redux/contactsThunk';
import { useEffect } from 'react';


export const ContactList = ({ title }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.list}>
        {contacts && contacts.length > 0 ? (
          contacts.map(contact => (
            <li key={contact.id}>
              <p>
                <span>{contact.name}:</span>
                <span>{contact.number}</span>
              </p>
              <button
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
                className={s.button_delete}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>There are no contacts here</p>
        )}
      </ul>
    </>
  );
};
