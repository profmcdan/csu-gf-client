import { IState, IAction } from '../interfaces';

import { REGISTER, LOGIN, LOGOUT, GET_USER, GET_MEMBERS } from '../actions';

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case REGISTER:
      return { ...state, auth: action.payload };
    case LOGIN:
      return { ...state, auth: action.payload };
    case LOGOUT:
      return { ...state, auth: action.payload };
    case GET_USER:
      return { ...state, user: action.payload };
    case GET_MEMBERS:
      return { ...state, members: action.payload };
    default:
      return state;
  }
};
