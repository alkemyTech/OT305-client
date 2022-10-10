import { createSelector } from "@ngrx/store";
import { NosotrosState, AppStore } from "../app.store";

export const selectNosotrosFeature = (state: AppStore) => state.nosotros;

export const selectNosotrosList = createSelector(
  selectNosotrosFeature,
  (state: NosotrosState) => state.nosotros
);

export const selectLoading = createSelector(
  selectNosotrosFeature,
  (state: NosotrosState) => state.loading
);
