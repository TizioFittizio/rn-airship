import { combineReducers } from 'redux';
import { AuthReducer, AuthState } from './AuthReducer';

export const Reducers = combineReducers({
    auth: AuthReducer
});

export interface ReducersState {
    auth: AuthState
}