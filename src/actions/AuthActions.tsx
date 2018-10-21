import { Dispatch } from 'redux';
import { AuthAction, AuthActionType } from './types';

export const login = () => async (dispatch : Dispatch<AuthAction>) => {
    await new Promise(resolve => {
        setTimeout(resolve, 3000)
    });
    dispatch({
        type: AuthActionType.LOGIN_SUBMIT
    })
}