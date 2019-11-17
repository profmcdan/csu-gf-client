export interface IState {
  auth: IAuth;
  user: IUser;
  members: any;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IAuth {
  isLoggedIn: boolean;
  accessToken?: string;
  refreshToken?: string;
}

export interface IUser {
  id: number | undefined;
  first_name: string;
  last_name: string;
  middle_name?: string;
  email: string;
  phone: string;
}
