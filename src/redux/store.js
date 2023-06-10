import { configureStore } from '@reduxjs/toolkit';
import { ContactsListSlice } from './ContactsListSlice';
import { FilterSlice } from './FilterSlice';

const initialState = {
  contacts: [],
  filter: '',
};

export const store = configureStore({
  initialState,

  reducer: {
    contacts: ContactsListSlice.reducer,
    filter: FilterSlice.reducer,
  },
});
