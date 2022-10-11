import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UsersService } from '../../services/users/users.service';

@Injectable()
export class UsersEffects {

  getUsers$ = createEffect(() => this.actions$.pipe(
    ofType('[users] Get_Users'),
    mergeMap(() => this.usersService.getUser()
      .pipe(
        map(users => ({ type: '[users] Get_Users_Success', users })),

        catchError(error => of({ type: '[users] Get_Users_Error', error }))
      ))
    )
  );


  constructor(
    private actions$: Actions,
    private usersService: UsersService,
  ) {}
} 