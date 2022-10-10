import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../app.store";

export const selectViewIdUser = createSelector(
  createFeatureSelector("userState"),
  (state: AuthState) => {
    return state.user;
  }
);
export const selectToken = createSelector(
  createFeatureSelector("tokenState"),
  (state: AuthState) => {
    return state.token;
  }
);
