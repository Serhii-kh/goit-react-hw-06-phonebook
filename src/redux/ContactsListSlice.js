import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const CONTACTS = 'contacts';

const persistConfig = {
  key: 'contacts',
  storage,
};

export const ContactsListSlice = createSlice({
  name: CONTACTS,
  initialState,

  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const persistedContactsReducer = persistReducer(
  persistConfig,
  ContactsListSlice.reducer
);

export const { addContact, deleteContact } = ContactsListSlice.actions;
