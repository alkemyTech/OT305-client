import { createSelector } from "@ngrx/store";
import { AppStore, NovedadState } from "../app.store";


export const selectNovedadFeature = (state: AppStore) => state.novedad;

export const selectNosotrosList = createSelector(
    selectNovedadFeature,
    (state: NovedadState) => state.novedad
  );
  
  export const selectLoading = createSelector(
    selectNovedadFeature,
    (state: NovedadState) => state.loading
  );