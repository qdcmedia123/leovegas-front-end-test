import {
  AuthUserAction,
  WatchLetterAction,
  FetchMoviesAction,
  SetQueryAction,
  SetPageAction
} from "../actions";
export enum ActionTypes {
  authUser,
  watchLatter,
  fetchMovies,
  query,
  setPage,
}

export type Action =
  | AuthUserAction
  | WatchLetterAction
  | FetchMoviesAction
  | SetQueryAction
  | SetPageAction;
