import { ActionReducerMap } from "@ngrx/store";
import { actividadReducer } from "./reducers/actividad.reducer";

export interface AppStore {
    actividad: ActividadState
}

export interface ActividadState {
    loading: boolean,
    actividad: ReadonlyArray<any>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppStore> = {
    actividad: actividadReducer
}