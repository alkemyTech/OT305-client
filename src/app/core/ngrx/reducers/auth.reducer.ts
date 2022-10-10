import { createReducer, on } from '@ngrx/store';
import { Login_Request_Success_Action, Logout_Action } from '../actions/auth.action';
import { AuthState } from '../app.store';

export const initialUserState: AuthState = {
    user: null,
    token: null
}

export const authReducer = createReducer(
    initialUserState,
    on(Login_Request_Success_Action, (state, { data }) => {
        return {
            ...state,
            user: data.user,
            token: data.token
        }
    }),
    on(Logout_Action, (state) => {
        return {
            ...state,
            user: null,
            token: null
        }
    })
)