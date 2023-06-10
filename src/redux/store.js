import { configureStore } from '@reduxjs/toolkit';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import { ContactsListSlice } from './ContactsListSlice';
import { FilterSlice } from './FilterSlice';
import { persistedContactsReducer } from './ContactsListSlice';
import persistStore from 'redux-persist/es/persistStore';

const reducer = {
  contacts: persistedContactsReducer,
  filter: FilterSlice.reducer,
};

export const store = configureStore({
  reducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
