import { createSlice } from '@reduxjs/toolkit';

const FILTER = 'filter';

export const FilterSlice = createSlice({
  name: FILTER,
  initialState: 'dff',

  reducers: {
    addFilterText(state, action) {
      state = action.payload;
    },
  },
});

export const { addFilterText } = FilterSlice.actions;
