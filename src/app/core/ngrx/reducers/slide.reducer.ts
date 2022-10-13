import { createReducer, on } from "@ngrx/store";
import { loadedSlides, loadSlides } from "../actions/slide.action";
import { SlideState } from "../app.store";

export const initialState: SlideState = { loading: false, slide: [] };

export const slideReducer = createReducer(
  initialState,
  on(loadSlides, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedSlides, (state, { slide }) => {
    return { ...state, loading: false, slide };
  })
);
