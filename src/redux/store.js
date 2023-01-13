import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./slice/sliceFilter";
import { contactsReducer } from "./slice/sliceContacts";



export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    },
});