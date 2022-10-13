import { createAction, props } from "@ngrx/store";

export const loadSlides = createAction("[Slide List] Load Slide");

export const loadedSlides = createAction(
  "[SLide List] Loaded Success",
  props<{ slide: Array<any> }>()
);
