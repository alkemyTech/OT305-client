import { createAction, props } from "@ngrx/store";
import { Member } from "../../models/member.model";

export const Get_Nosotros = createAction("[nosotros] Get_Nosotros");

export const Get_Nosotros_Success = createAction(
  "[nosotros] Get_Nosotros_Success",
  props<{ nosotros: Array<Member> }>()
);

export const Get_Nosotros_Error = createAction(
  "[nosotros] Get_Nosotros_Error",
  props<{ error: any }>()
);
