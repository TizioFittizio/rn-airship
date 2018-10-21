import { Action } from 'redux';

export interface AuthAction extends Action {
    type: AuthActionType,
    payload?: any
}

export enum AuthActionType {
    LOGIN_SUBMIT,
    LOGIN_SUCCESS,
    LOGIN_FAILED
}