import { createAction, props } from '@ngrx/store';
import { Novedad } from '../../models/novedad.model';

export const Get_Novedad = createAction(
   '[novedad] Get_Novedad'  
);

export const Get_Novedad_Success = createAction(

  '[novedad] Get_Novedad_Success',
  props<{ novedad: Array<Novedad> }>()
); 

export const Get_Novedad_Error = createAction(

    '[novedad] Get_Novedad_Error',
    props<{ error: any }>()
  ); 