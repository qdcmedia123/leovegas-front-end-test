import { AuthUserAction } from "../actions";
export enum ActionTypes {
  authUser,
  watchLatter,
  fetchMovies,
  query,
  setPage,
}
export type Action = AuthUserAction;
