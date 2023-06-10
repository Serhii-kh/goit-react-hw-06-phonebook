import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { FilterSlice } from './FilterSlice';
import { ContactsListSlice } from './ContactsListSlice';

// export const rootReducer = combineReducers({
//   contacts: persistedContactsReducer,
//   filter: FilterSlice.reducer,
// });

export const store = configureStore({
  reducer: {
    contacts: ContactsListSlice.reducer,
    filter: FilterSlice.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
