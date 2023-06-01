import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { PERSIST, persistReducer, persistStore } from 'redux-persist';
import { apiSlice } from './slice';
import orderReducer from './slice/OrderSlice/OrderSlice';
import supplierReducer from './slice/SupplierSlice/SupplierSlice';
import personnelReducer from './slice/PersonnelSlice/PersonnelSlice';

const rootReducer = combineReducers({
  orderReducer,
  supplierReducer,
  personnelReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage, // uses local storage behind the scenes
};

// this reducer gets stored in the localStorage so that it is persisted between page reloads.
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }).concat(apiSlice.middleware),
  devTools: true,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
