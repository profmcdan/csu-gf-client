import { IState, IAction } from '../interfaces';

import { REGISTER, LOGIN, LOGOUT } from '../actions';

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case REGISTER:
      return { ...state, auth: action.payload };
    case LOGIN:
      return { ...state, auth: action.payload };
    case LOGOUT:
      return { ...state, auth: action.payload };

    default:
      return state;
  }
};
