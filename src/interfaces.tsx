export interface IState {
  auth: IAuth;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IAuth {
  username: string;
  email: string;
  role: string;
  isLoggedIn: boolean;
}
