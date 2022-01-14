import { Action, ActionTypes } from "../action-types";
import { AuthUser, WatchLetter } from "../actions";
import { isMovieFav } from "functions/getMovieById";
const initialState = { favourites: [], watchLatter: [] };

export const authReducer = (state: AuthUser = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.authUser:
      let favourites = state.favourites;
      let { id } = action.payload as any;
      let favExists = isMovieFav(id, favourites);
      if (favExists) {
        favourites = favourites.filter((movie: any) => movie.id !== id);
      } else {
        favourites = [...favourites, action.payload];
      }
      return {
        ...state,
        favourites,
      };
    // @ts-ignore
    case ActionTypes.watchLatter:
      let watchLatter = state.watchLatter;
      let { id: mId } = action.payload as any;

      let watchLetterExists = isMovieFav(mId, watchLatter);

      if (watchLetterExists) {
        watchLatter = watchLatter.filter((movie: any) => movie.id !== mId);
      } else {
        watchLatter = [...watchLatter, action.payload];
      }
      return {
        ...state,
        watchLatter,
      };

    default:
      return state;
  }
};
