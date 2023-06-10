import { createSlice } from '@reduxjs/toolkit';

const FILTER = 'filter';

export const FilterSlice = createSlice({
  name: FILTER,
  initialState: '',

  reducers: {
    addFilterText(state, action) {
      return state = action.payload;
    },
  },
});

export const { addFilterText } = FilterSlice.actions;
