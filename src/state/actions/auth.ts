import { ActionTypes } from "../action-types";
export interface Movies {
  movies?: any;
}
export interface WatchLetter {
  watchLatter?: any;
}
export interface AuthUser extends WatchLetter, Movies {
  favourites: any;
  query?: any;
  page?: any;
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
export const fetchMovies = (data: any) => {
  return {
    type: ActionTypes.fetchMovies,
    payload: data,
  };
};
export const setQuery = (data: string) => {
  return {
    type: ActionTypes.query,
    payload: data,
  };
};
export const setPageAction = (data: number) => {
  return {
    type: ActionTypes.setPage,
    payload: data,
  };
};
