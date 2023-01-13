import styled from "@emotion/styled";
import { Field, ErrorMessage } from 'formik';


export const FormWrapper = styled.div`
text-align: center; 
`
export const FormBox = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 margin: 0 auto 20px;
 text-align: start;
 width: 300px;
`

export const Label = styled.label`
 display: flex;
 flex-direction: column;
 width: 100%;
 font-weight: 500;
 :not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const Input = styled(Field)`
font-size: 20px;
padding: 5px 10px;
border: 2px solid #ccc;
border-radius: 5px;
outline: none;
:focus {
    border-color: #4287f5;
  }
`;

export const Error = styled(ErrorMessage)`
  margin-top: 5px;
  font-size: 14px;
  color: red;
`;

export const FormButton = styled.button`
font-size: 16px;
padding: 10px;
border: 2px solid #ccc;
border-radius: 5px;
 :not(:last-child) {
    margin-right: 10px;
  }
  :hover {
    color: #4287f5;
    border-color: #4287f5;  
  }
`;