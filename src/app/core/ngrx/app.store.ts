import { ActionReducerMap } from "@ngrx/store";
import { Actividad } from "../models/actividad.model";
import { Categoria } from "../models/categoria.models";
import { Member } from "../models/member.model";
import { Novedad } from "../models/novedad.model";
import { Slide } from "../models/slide.model";
import { actividadReducer } from "./reducers/actividad.reducer";
import { authReducer } from "./reducers/auth.reducer";
import { categorieReducer } from "./reducers/categorie.reducer";
import { nosotrosReducer } from "./reducers/nosotros.reducer";
import { novedadReducer } from "./reducers/novedad.reducer";
import { slideReducer } from "./reducers/slide.reducer";

export interface AppStore {
  actividad: ActividadState;
  auth: AuthState;
  nosotros: NosotrosState;
  novedad: NovedadState;
  categorie: CategorieState;
  slide: SlideState;
}

export interface ActividadState {
  loading: boolean;
  actividad: ReadonlyArray<Actividad>;
}
export interface NovedadState {
  loading: boolean;
  novedad: ReadonlyArray<Novedad>;
}

export interface AuthState {
  user: any | null;
  token: string | null;
  rol_id: number | null;
}

export interface NosotrosState {
  loading: boolean;
  nosotros: ReadonlyArray<Member>;
}
export interface CategorieState {
  loading: boolean;
  categorie: ReadonlyArray<Categoria[]>;
}
export interface SlideState {
  loading: boolean;
  slide: ReadonlyArray<Slide>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppStore> = {
  actividad: actividadReducer,
  auth: authReducer,
  nosotros: nosotrosReducer,
  categorie: categorieReducer,
  slide: slideReducer,
  novedad: novedadReducer
};
