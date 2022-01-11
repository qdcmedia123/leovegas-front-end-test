import { Action, ActionTypes } from '../action-types';

export interface AuthUser {
    isAuthenticated: boolean;
    token?: string | null;
}

export interface AddFavorite {
    favourites?: object
}

export interface AuthUserAction {
    type: ActionTypes.authUser,
    payload: AuthUser
}

export interface AddFavouriteAction {
    type: ActionTypes.addFavourite,
    payload: AddFavorite
}

export const authUser = (data: AuthUser) => {
    return {
        type: ActionTypes.authUser,
        payload: data
    }
}

export const addFavourite = (data: AddFavorite) => {
    return {
        type: ActionTypes.addFavourite,
        payload: data
    }
}
