import { createAction, props } from "@ngrx/store";

export const loadCategories = createAction("[Categorie List] Load Categories");

export const loadedCategories = createAction(
  "[Categorie List] Loaded Success",
  props<{ categorie: Array<any> }>()
);
