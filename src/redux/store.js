import { configureStore } from '@reduxjs/toolkit';
import { ContactFormSlice } from './ContactFomSlice';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export const store = configureStore({
  // initialState: initialContacts,
  reducer: {
    contacts: ContactFormSlice.reducer,
  },
});
