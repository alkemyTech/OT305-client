import { createReducer, on } from "@ngrx/store";
import { Get_Novedad, Get_Novedad_Error, Get_Novedad_Success } from "../actions/novedades.action";
import { NovedadState } from "../app.store";


export const initialState: NovedadState = { loading: false, novedad: []}

export const novedadReducer = createReducer(
  initialState,
  on(Get_Novedad, (state) => { 
    return { ... state, loading: true }
  }),
  on(Get_Novedad_Success, (state, {novedad}) => { 
    return { ... state, loading: false, novedad }
  }),
  on(Get_Novedad_Error, (state, {error}) => { 
    return { ... state, loading: false, error }
  })
); 