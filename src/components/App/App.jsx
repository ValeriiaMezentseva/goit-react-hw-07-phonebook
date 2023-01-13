import { Container, Title } from "./App.styled";
import ContactsForm from "../Form";
import ContactsList from "../Contacts";
import Loader from "components/Loader";
import Filter from "../Filter";
import { useEffect } from "react";
import { setFilter } from "redux/slice/sliceFilter";
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter, selectOpenFilter, selectError, selectIsLoading} from 'redux/selectors';
import { fetchContacts, deleteContact } from "redux/operations";

export const App = () => {

  const contacts = useSelector(selectContacts); 
  const filter = useSelector(selectFilter);
  const isOpenFilter = useSelector(selectOpenFilter); 
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch(); 
 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const submitHandler = data => {
  //   dispatch(addContact(data));
  //   Notify.success(`${data.name} was successfully added to your contacts`);
  // };
    

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  const onChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value))
  }; 

  const getFilteredContacts = () => {
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };
  const filtredContacts = getFilteredContacts();


  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactsForm 
        isOpenFilter={isOpenFilter} />
      {isOpenFilter && (<Filter value={filter} onSearch={onChangeFilter} />)}
      <ContactsList contacts={filtredContacts} onDeleteClick={removeContact} />
      {isLoading && !error && <Loader/>}
      {error && <b>{error}</b>}
    </Container>
  )
};
