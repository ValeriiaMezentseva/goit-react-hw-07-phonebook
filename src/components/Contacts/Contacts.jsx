import { TiDeleteOutline } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { LoaderSpinner } from 'components/Loader/Loader';
import { selectContacts, selectFilter, selectOperation } from 'redux/selectors';
import { ItemUser, UserIcon, ContactList, ContactsButton, ContactsTitle, ContactsContainer } from './Contacts.styled';


const ContactsList = () => {
    const dispatch = useDispatch();
    
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const operation = useSelector(selectOperation); 
    
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
                            <ContactsButton onClick={() => removeContact(id)}>
                                { operation === id ? <LoaderSpinner /> : <TiDeleteOutline />}</ContactsButton>
                        </ItemUser>
                    ))}
                </ContactList>
            ) : (<p>There is no contacts</p>)}
        </ContactsContainer>
    );
};

export default ContactsList; 

