import { createSelector } from "@ngrx/store";
import { AppStore, CategorieState } from "../app.store";

export const selectCategorieFeature = (state: AppStore) => state.categorie;

export const selectListCategorie = createSelector(
  selectCategorieFeature,
  (state: CategorieState) => state.categorie
);
export const selectLoadingCategorie = createSelector(
  selectCategorieFeature,
  (state: CategorieState) => state.loading
);
