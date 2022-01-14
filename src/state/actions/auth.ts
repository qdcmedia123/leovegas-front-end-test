import { ActionTypes } from "../action-types";

// Will update this one
export interface WatchLetter {
  watchLatter?: any;
}

export interface AuthUser extends WatchLetter {
  favourites: any;
}

export interface AuthUserAction {
  type: ActionTypes.authUser;
  payload: AuthUser;
}

export interface WatchLetterAction {
  type: ActionTypes.authUser;
  payload: AuthUser;
}

export const authUser = (data: AuthUser) => {
  return {
    type: ActionTypes.authUser,
    payload: data,
  };
};

export const watchLatter = (data: any) => {
  return {
    type: ActionTypes.watchLatter,
    payload: data,
  };
};
