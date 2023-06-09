import { createSlice } from '@reduxjs/toolkit';
// import { useDispatch } from "react-redux";
// import { useSelector } from 'react-redux';
// import { store } from './store';
// const state = useSelector(store);
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
