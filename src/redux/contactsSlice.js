import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialContactsState = [];

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: initialContactsState,
    },
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload)
        },
        deleteContact: (state, action) => {
           return {
            contacts: state.contacts.filter(contact => contact.id !== action.payload)
           }
        },
    }
})

const persistConfig = {
    key: 'contacts',
    storage,
};

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const {addContact, deleteContact} = contactsSlice.actions;

