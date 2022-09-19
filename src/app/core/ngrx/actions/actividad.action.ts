import { createAction, props } from '@ngrx/store';

export const Get_Actividad = createAction(
   '[actividad] Get_Actividad'  
);

export const Get_Actividad_Success = createAction(

  '[actividad] Get_Actividad_Success',
  props<{ actividad: Array<any> }>()
); 

export const Get_Actividad_Error = createAction(

    '[actividad] Get_Actividad_Error',
    props<{ error: any }>()
  ); 