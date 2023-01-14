import PropTypes from 'prop-types';
import { TiDeleteOutline } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ItemUser, UserIcon, ContactList, ContactsButton, ContactsTitle, ContactsContainer } from './Contacts.styled';


const ContactsList = () => {
    const dispatch = useDispatch();
    
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    
    const removeContact = id => {
        try {
            dispatch(deleteContact(id));
            Notify.success(`Contact was successfully removed from your contacts`);
        } catch (error) {
            Notify.error(`Something went wrong`);
    }
    };
    
 const getFilteredContacts = () => {
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };
    const filtredContacts = getFilteredContacts();
    

    return (
        <ContactsContainer>
            <ContactsTitle> Contacts </ContactsTitle>
            {filtredContacts.length > 0 ? (
                <ContactList>
                    {filtredContacts.map(({ id, name, phone }) => (
                        <ItemUser key={id}>
                            <UserIcon /> {name}: {phone}
                            <ContactsButton onClick={() => removeContact(id)}><TiDeleteOutline /></ContactsButton>
                        </ItemUser>
                    ))}
                </ContactList>
            ) : (<p>There is no contacts</p>)}
        </ContactsContainer>
    );
};

export default ContactsList; 

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    })),
};