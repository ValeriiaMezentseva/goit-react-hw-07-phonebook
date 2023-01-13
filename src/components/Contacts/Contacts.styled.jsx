import styled from "@emotion/styled";
import { FaUserCircle } from 'react-icons/fa';



export const UserIcon = styled(FaUserCircle)`
padding: 3px;
border: 1px solid black;
border-radius: 50%;
margin-right: 10px;
color: black;
font-size: 20px;
`

export const ItemUser = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #ccc;
:not(:last-child) {
    margin-bottom: 20px;
    }
    :hover {
    color: #4287f5;
    border-color: #4287f5;
  }
`

export const ContactList = styled.ul`
background-color: #c5dcf0;
padding: 15px;
`

export const ContactsButton = styled.button`
width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #242323;
  font-size: 36px;
  border: none;
  background-color: transparent;
  transition: all 100ms linear;
  cursor: pointer;
  :hover {
    color: red;
  }
`;

export const ContactsTitle = styled.h2`
    text-align: center; 

`;


export const ContactsContainer = styled.div`
`;