import PropTypes from 'prop-types';
import { TiDeleteOutline } from 'react-icons/ti';
import { ItemUser, UserIcon, ContactList, ContactsButton, ContactsTitle, ContactsContainer } from './Contacts.styled';




const ContactsList = ({ contacts, onDeleteClick }) => {
    return (
        <ContactsContainer>
            <ContactsTitle> Contacts </ContactsTitle>
            {contacts.length > 0 ? (
                <ContactList>
                    {contacts.map(({ id, name, phone }) => (
                        <ItemUser key={id}> 
                            <UserIcon /> {name}: {phone}
                            <ContactsButton onClick={() => onDeleteClick(id)}><TiDeleteOutline/></ContactsButton>
                            </ItemUser>
                    ))}
                </ContactList>
            ) : (
            <p>There is no contacts</p>
            )}
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
    onDeleteClick: PropTypes.func.isRequired,
};