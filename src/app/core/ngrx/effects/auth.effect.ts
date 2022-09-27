import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from "rxjs/operators";
import { HttpService } from "../../services/http.service";

@Injectable()
export class AuthEffects {
    


    constructor(
        private actions$: Actions,
        private http: HttpService
        ){}
}