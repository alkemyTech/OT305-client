import { createSelector } from "@ngrx/store";
import { ActividadState, AppStore } from "../app.store";

export const selectActividadFeature = (state: AppStore) => state.actividad;

export const selectActividadList = createSelector(
  selectActividadFeature,
  (state: ActividadState) => state.actividad
);

export const selectLoading = createSelector(
  selectActividadFeature,
  (state: ActividadState) => state.loading
);
