import { createReducer, on } from '@ngrx/store';
import { Get_Actividad, Get_Actividad_Error, Get_Actividad_Success } from '../actions/actividad.action';
import { ActividadState } from '../app.store';

export const initialState: ActividadState = { loading: false, actividad: []}

export const actividadReducer = createReducer(
  initialState,
  on(Get_Actividad, (state) => { 
    return { ... state, loading: true }
  }),
  on(Get_Actividad_Success, (state, {actividad}) => { 
    return { ... state, loading: false, actividad }
  }),
  on(Get_Actividad_Error, (state, {error}) => { 
    return { ... state, loading: false, error }
  })
); 