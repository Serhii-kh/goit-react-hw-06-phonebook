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
import { ContactsListSlice } from './ContactsListSlice';
import { FilterSlice } from './FilterSlice';
// import storage from 'redux-persist/lib/storage';
// import { combineReducers } from '@reduxjs/toolkit';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// const persistedContactsReducer = persistReducer(
//   persistConfig,
//   ContactsListSlice.reducer
// );

// const reducer = combineReducers({
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

// export const persistor = persistStore(store);
