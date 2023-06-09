import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state';

const CONTACTS = 'contacts';

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
		}
  },
});

export const { addContact, deleteContact } = ContactsListSlice.actions;
