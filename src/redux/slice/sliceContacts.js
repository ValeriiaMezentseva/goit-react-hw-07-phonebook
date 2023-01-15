import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "redux/operations";


const handleRejected = (state, action) => {
  state.isLoading = false;
    state.error = action.payload;
    state.operation = null; 
};


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        operation: null,
        isLoading: false,
        error: null,
    }, 
    extraReducers: {
        [fetchContacts.pending](state) {
            state.operation = 'fetch';
            state.isLoading = true; 
        },
        [fetchContacts.fulfilled](state, action) {
            state.operation = null; 
            state.isLoading = false;
            state.error = null;
            state.items = action.payload; 
        },
        [fetchContacts.rejected]: handleRejected, 

        [addContact.pending](state) {
            state.operation = 'add'; 
            state.isLoading = true; 
        },
        [addContact.fulfilled](state, action) {
            state.operation = null; 
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addContact.rejected]: handleRejected, 

        [deleteContact.pending](state, action) {
            state.operation = `${action.meta.arg}`;
            state.isLoading = true; 
            
        }, 
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(contact => contact.id === action.payload);
            state.items.splice(index, 1);
        },
        [deleteContact.rejected]: handleRejected,
    },
});



export const contactsReducer = contactsSlice.reducer;