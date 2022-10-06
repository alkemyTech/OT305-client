import { ActionReducerMap } from "@ngrx/store";
import { Actividad } from "../models/actividad.model";
import { Member } from "../models/member.model";
import { actividadReducer } from "./reducers/actividad.reducer";
import { authReducer } from "./reducers/auth.reducer";
import { nosotrosReducer } from "./reducers/nosotros.reducer";

export interface AppStore {
    actividad: ActividadState,
    auth: AuthState,
    nosotros: NosotrosState,
}

export interface ActividadState {
    loading: boolean,
    actividad: ReadonlyArray<Actividad>;
}

export interface AuthState {
    user: any | null,
    token: string | null
}

export interface NosotrosState {
    loading: boolean,
    nosotros: ReadonlyArray<Member>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppStore> = {
    actividad: actividadReducer,
    auth: authReducer,
    nosotros: nosotrosReducer,
}