import { Action, ActionTypes } from '../action-types';
import { AuthUser } from '../actions';

const initialState = {favourites: []};

export const authReducer = (state:AuthUser = initialState, action:Action) => {
    switch(action.type) {
        case ActionTypes.authUser:
            // Get previouse state 
            // Push new data to the auth state
            
            //return {...action.payload};
            const { payload } = action;
            
            return {
                ...state, 
                favourites: {
                    ...state,
                    payload
                }
            }
        default:
            return state;
    }
}