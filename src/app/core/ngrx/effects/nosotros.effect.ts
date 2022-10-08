import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MembersService } from '../../services/members/members.service';

@Injectable()
export class NosotrosEffects {

  getNosotros$ = createEffect(() => this.actions$.pipe(
    ofType('[nosotros] Get_Nosotros'),
    mergeMap(() => this.membersService.listMember()
      .pipe(
        map(nosotros => ({ type: '[nosotros] Get_Nosotros_Success', nosotros })),

        catchError(error => of({ type: '[nosotros] Get_Nosotros_Error', error }))
      ))
    )
  );


  constructor(
    private actions$: Actions,
    private membersService: MembersService,
  ) {}
} 