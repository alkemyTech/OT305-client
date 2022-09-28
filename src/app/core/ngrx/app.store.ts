import { ActionReducerMap } from "@ngrx/store";
import { actividadReducer } from "./reducers/actividad.reducer";
import { authReducer } from "./reducers/auth.reducer";

export interface AppStore {
    actividad: ActividadState,
    auth: AuthState
}

export interface ActividadState {
    loading: boolean,
    actividad: ReadonlyArray<any>;
}

export interface AuthState {
    user: any | null,
    token: string | null
}

export const ROOT_REDUCERS: ActionReducerMap<AppStore> = {
    actividad: actividadReducer,
    auth: authReducer
}