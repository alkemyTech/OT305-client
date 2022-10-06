import { createReducer, on } from '@ngrx/store';
import { Get_Nosotros, Get_Nosotros_Error, Get_Nosotros_Success } from '../actions/nosotros.action';
import { NosotrosState } from '../app.store';

export const initialState: NosotrosState = { loading: false, nosotros: []}

export const nosotrosReducer = createReducer(
  initialState,
  on(Get_Nosotros, (state) => { 
    return { ... state, loading: true }
  }),
  on(Get_Nosotros_Success, (state, {nosotros}) => { 
    return { ... state, loading: false, nosotros }
  }),
  on(Get_Nosotros_Error, (state, {error}) => { 
    return { ... state, loading: false, error }
  })
); 