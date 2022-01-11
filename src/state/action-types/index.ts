import {
    AuthUserAction
  } from "../actions";
   
  export enum ActionTypes {
    authUser,
    addFavourite,
    removeFavourite
  }
  
  export type Action =  | AuthUserAction
  