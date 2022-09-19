import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ActividadService } from '../../services/activities/actividad.service';

@Injectable()
export class ActividadEffects {

  getActividades$ = createEffect(() => this.actions$.pipe(
    ofType('[actividad] Get_Actividad'),
    mergeMap(() => this.actividadService.getActivities()
      .pipe(
        map(actividad => ({ type: '[actividad] Get_Actividad_Success', actividad })),

        catchError(error => of({ type: '[actividad] Get_Actividad_Error', error }))
      ))
    )
  );


  constructor(
    private actions$: Actions,
    private actividadService: ActividadService,
  ) {}
} 