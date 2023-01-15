import { Container, Title } from "./App.styled";
import ContactsForm from "../Form";
import ContactsList from "../Contacts";
import Filter from "../Filter";
import { Loader } from "components/Loader/Loader";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectOpenFilter, selectError, selectOperation} from 'redux/selectors';
import { fetchContacts } from "redux/operations";

export const App = () => {

  const isOpenFilter = useSelector(selectOpenFilter);
  const error = useSelector(selectError);
  const operation = useSelector(selectOperation); 
  const dispatch = useDispatch(); 
 
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactsForm />
      {isOpenFilter && (<Filter />)}
      {operation === 'fetch' && !error ? <Loader /> : <ContactsList />}
      {error && <div> Something went wrong! Please try again! </div>}
    </Container>
  )
};
