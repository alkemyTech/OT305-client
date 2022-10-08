import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { CategoriesService } from "../../services/categories/categories.service";

@Injectable()
export class CategorieEffects {
  getCategorie$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Categorie List] Load Categories"),
      mergeMap(() =>
        this.categoriesService.listCategorie().pipe(
          map((categorie) => ({
            type: "[Categorie List] Loaded Success",
            categorie,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService
  ) {}
}
