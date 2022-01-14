import {
    AuthUserAction
  } from "../actions";
   
  export enum ActionTypes {
    authUser,
    watchLatter
  }
  
  export type Action =  | AuthUserAction
  