import { createSelector } from "@ngrx/store";
import { AppStore, SlideState } from "../app.store";

export const selectSlideFeature = (state: AppStore) => state.slide;

export const selectListSlide = createSelector(
  selectSlideFeature,
  (state: SlideState) => state.slide
);
export const selectLoadingSlide = createSelector(
  selectSlideFeature,
  (state: SlideState) => state.loading
);
