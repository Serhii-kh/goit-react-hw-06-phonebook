import { createSlice } from '@reduxjs/toolkit';
// import { useDispatch } from "react-redux";
// import { useSelector } from 'react-redux';
// import { store } from './store';
// const state = useSelector(store);

// const initialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const CONTACTS = 'contacts';

export const ContactFormSlice = createSlice({
  name: CONTACTS,
  initialState: [],

  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addContact } = ContactFormSlice.actions;
