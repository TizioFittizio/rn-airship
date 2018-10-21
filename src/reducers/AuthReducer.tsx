import { AuthAction, AuthActionType } from '../actions/types';

export interface AuthState {
    authenticating: boolean;
}

const INITIAL_STATE: AuthState = {
    authenticating: false
}

export const AuthReducer = (state = INITIAL_STATE, action: AuthAction): AuthState => {
    switch (action.type){
        case AuthActionType.LOGIN_SUBMIT:
            return { ...state, authenticating: true};
        default:
            return state;
    }
}