import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { SlidesService } from "../../services/slides/slides.service";

@Injectable()
export class SlideEffects {
  getSlide$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Slide List] Load Slide"),
      mergeMap(() =>
        this.slideService.getSlide().pipe(
          map((slide) => ({
            type: "[SLide List] Loaded Success",
            slide,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private slideService: SlidesService) {}
}
