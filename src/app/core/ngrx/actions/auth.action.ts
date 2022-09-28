import { createAction, props } from '@ngrx/store';

//ACTIONS PARA EL REGISTRO DE NUEVOS USUARIOS
export const Register_Request_Action = createAction(
    '[Auth] Register_Request'
)

export const Register_Request_Success_Action = createAction(
    '[Auth] Register_Request_Success'
)

export const Register_Request_Error_Action = createAction(
    '[Auth] Register_Request_Error'
)

//ACTIONS PARA EL LOGIN DE USUARIOS EXISTENTES
export const Login_Request_Action = createAction(
    '[Auth] Login_Request'
);

export const Login_Request_Success_Action = createAction(
    '[Auth] Login_Request_Success',
    props<{ data: any }>()
)

export const Login_Request_Error_Action = createAction(
    '[Auth] Login_Request_Error'
)

export const Logout_Action = createAction(
    '[Auth] Logout'
)