import {  combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
	persistReducer,
} from 'redux-persist';
import { FilterSlice } from './FilterSlice';
import { ContactsListSlice } from './ContactsListSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'all',
	storage,
	whitelist: ['contacts'],
};

const rootReducer = combineReducers({
	contacts: ContactsListSlice.reducer,
	filter: FilterSlice.reducer,
})

const persistedRootReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
		reducer: persistedRootReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)