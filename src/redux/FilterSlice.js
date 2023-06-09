import { createSlice } from "@reduxjs/toolkit";

const FILTER = 'filter'

export const FilterSlice = createSlice({
	name: FILTER,
	initialState: '',

	reducers: {
		addFilterText(state, action) {
			state.push(action.payload)
		}
	}
})

export const { addFilterText } = FilterSlice.actions