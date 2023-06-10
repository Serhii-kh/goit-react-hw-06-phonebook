import { configureStore } from '@reduxjs/toolkit';
import { ContactsListSlice } from './ContactsListSlice';
import { FilterSlice } from './FilterSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactsListSlice.reducer,
    filter: FilterSlice.reducer,
  },
});
