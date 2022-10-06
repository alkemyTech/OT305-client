import { createReducer, on } from "@ngrx/store";
import { loadCategories, loadedCategories } from "../actions/categorie.action";
import { CategorieState } from "../app.store";

export const initialState: CategorieState = { loading: false, categorie: [] };

export const categorieReducer = createReducer(
  initialState,
  on(loadCategories, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedCategories, (state, { categorie }) => {
    return { ...state, loading: false, categorie };
  })
);
