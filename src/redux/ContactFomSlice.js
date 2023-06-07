import { createSlice } from '@reduxjs/toolkit';
// import { useDispatch } from "react-redux";
// import { useSelector } from 'react-redux';
// import { store } from './store';

// const state = useSelector(store);
const CONTACT_FORM = 'contactForm';
const initialState = {
  contact: {
    name: '',
    number: '',
  },
};

export const ContactFormSlice = createSlice({
  name: CONTACT_FORM,
  initialState,

  reducers: {
    setName(state, action) {
      state.contact.name = action.payload;
    },
    setNumber(state, action) {
      state.contact.number = action.payload;
    },
  },
});

export const { setName, setNumber } = ContactFormSlice.actions;
