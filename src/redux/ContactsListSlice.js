import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { CONTACTS } from './constants';

export const ContactsListSlice = createSlice({
  name: CONTACTS,
  initialState,

  reducers: {
    addContact(state, {payload}) {
      state.push(payload);
    },
    deleteContact(state, {payload}) {
      const index = state.findIndex(contact => contact.id === payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = ContactsListSlice.actions;
