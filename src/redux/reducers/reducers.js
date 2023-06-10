import { ContactsListSlice } from "redux/ContactsListSlice";
import { FilterSlice } from "redux/FilterSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
	storage,
	whitelist: ['contacts'],
};

const rootReducer = combineReducers({
	contacts: ContactsListSlice.reducer,
	filter: FilterSlice.reducer,
})

export const persistedRootReducer = persistReducer(persistConfig, rootReducer)




