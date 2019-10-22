import React, { createContext, useReducer } from 'react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //
import { PersistGate } from 'redux-persist/integration/react';
import { IState } from './interfaces';
import { reducer } from './reducers';

const initialState: IState = {
  auth: {
    username: '',
    email: '',
    role: '',
    isLoggedIn: false,
  },
};

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const Store = createContext<IState | any>(initialState);
export const persistor = persistStore(Store);

export const StoreProvider = (props: any) => {
  const [state, dispatch] = useReducer(persistedReducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      <PersistGate loading={null} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Store.Provider>
  );
};
