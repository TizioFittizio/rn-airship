import { Dispatch } from 'redux';
import { AuthAction, AuthActionType } from './types';

export const loginAction = () => async (dispatch : Dispatch<AuthAction>) => {
    dispatch({
        type: AuthActionType.LOGIN_SUBMIT
    })
}
export type LoginActionType = typeof loginAction;