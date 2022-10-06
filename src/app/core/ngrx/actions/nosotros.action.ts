import { createAction, props } from "@ngrx/store";
import { Organizacion } from "../../models/organizacion.model";

export const Get_Nosotros = createAction("[nosotros] Get_Nosotros");

export const Get_Nosotros_Success = createAction(
  "[nosotros] Get_Nosotros_Success",
  props<{ nosotros: Array<Organizacion> }>()
);

export const Get_Nosotros_Error = createAction(
  "[nosotros] Get_Nosotros_Error",
  props<{ error: any }>()
);
