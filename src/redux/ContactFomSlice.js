import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";

const CONTACT_FORM = 'contactForm'
const initialState = {
	name: '',
	number: '',
}

export const ContactFormSlice = createSlice({
	name: CONTACT_FORM,
	initialState,

	reducers: {
		setName(state, action) {
			state.name = action.payload
		},
		setNumber(state, action) {
			state.number = action.payload
		}
	}
})

export const {setName, setNumber} = ContactFormSlice.actions