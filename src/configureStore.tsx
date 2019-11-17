import React, { createContext, useReducer } from 'react';
import { IState } from './interfaces';
import { reducer } from './reducers';

const initialState: IState = {
  auth: {
    isLoggedIn: false,
    accessToken: '',
    refreshToken: '',
  },
  user: {
    id: undefined,
    first_name: '',
    last_name: '',
    middle_name: '',
    phone: '',
    email: '',
  },
  members: [],
};

export const Store = createContext<IState | any>(initialState);

export const StoreProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
