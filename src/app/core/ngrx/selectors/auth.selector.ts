import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStore, AuthState } from "../app.store";

export const selectAuthFeature = (state: AppStore) => state.auth;

export const selectToken = createSelector(
  selectAuthFeature,
  (state: AuthState) => state.token
);
export const selectViewIdUser = createSelector(
  createFeatureSelector("userState"),
  (state: AuthState) => {
    return state.rol_id;
  }
);
