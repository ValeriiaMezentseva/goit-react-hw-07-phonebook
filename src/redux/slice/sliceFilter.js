import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: { value: '', isOpen: false },
    reducers: {
        setFilter: (state, action) => {
            return ( { ...state, value: action.payload } );
        },
        toggle: state => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const filterReducer = filterSlice.reducer; 
export const { setFilter, toggle: toggleFilterAction } = filterSlice.actions;