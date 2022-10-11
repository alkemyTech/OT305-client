import { createSelector } from "@ngrx/store";
import { UsersState, AppStore } from "../app.store";

export const selectUsersFeature = (state: AppStore) => state.users;

export const selectUsersList = createSelector(
  selectUsersFeature,
  (state: UsersState) => state.users
);

export const selectLoading = createSelector(
  selectUsersFeature,
  (state: UsersState) => state.loading
);