import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'
import { Notify } from 'notiflix';
import { FormWrapper, FormBox, Label, Input, Error, FormButton } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { toggleFilterAction } from "redux/slice/sliceFilter";
import { addContact } from 'redux/operations';

const namePattern = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const numberPattern = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
    name: yup.string().matches(namePattern, "Name is not valid").required(),
    number: yup.string().min(6).max(24).matches(numberPattern, 'Phone number is not valid').required(),
});

const initialValues = {
    id: '',
    name: '',
    number: '',
}; 

const ContactsForm = ({ isOpenFilter }) => {

    const contacts = useSelector(selectContacts); 
    const dispatch = useDispatch();  
    const toggle = () => {
    dispatch(toggleFilterAction());
  }
    const handleSubmit = (values, { resetForm }) => {  
        const isIncluded = contacts.some(contact => contact.name.toLowerCase() === values.name.toLowerCase());
        if (isIncluded) {
            Notify.failure(`${values.name} is already in your contacts`)
            return;
        }
        values.id = nanoid(10);
        dispatch(addContact(values));
         Notify.success(`${values.name} was successfully added to your contacts`);
        resetForm();

     }
     return (
         <Formik
             initialValues={initialValues}
             validationSchema={schema}
             onSubmit={handleSubmit}
         >
             <FormWrapper>
                 <Form autoComplete="off">
                     <FormBox>
                <Label htmlFor='name'>
                     Name
                     <Input
                         id='name'
                         type="text"
                         name="name"
                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                     />
                     <Error name='name' component='div' />
                 </Label>
                <Label htmlFor='number'>
                    Number
                     <Input
                         id='number'
                         type="tel"
                         name="number"
                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                     />
                     <Error name='number' component='div' /> 
                         </Label>
                         </FormBox>
                     <FormButton type="submit"> Add contact </FormButton>
                     <FormButton type="button" onClick={toggle} isOpen={isOpenFilter}>{isOpenFilter ? 'Close filter' : 'Search'}</FormButton>
                 </Form>
                 </FormWrapper>
             </Formik>
     )

       
 };
    
export default ContactsForm;

ContactsForm.propTypes = {
    isOpenFilter: PropTypes.bool.isRequired,
};