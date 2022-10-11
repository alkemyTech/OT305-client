import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { selectViewIdUser } from '../ngrx/selectors/auth.selector';
import { ConfirmDialogService } from '../services/confirm-dialog.service';

@Injectable({
  providedIn: 'root'
})
export class NoAutenticadoGuard implements CanActivate, CanLoad {
  
  userId$: Observable<number|null> = new Observable<number>;

  noAutenticado = {
      title: "Error",
      message: "Debe estar registrado para subscribirse al newsletter",
      cancelText: "Cancelar",
      confirmText: "Aceptar"
  }

  constructor( private store: Store, private router: Router, private dialog: ConfirmDialogService) {
    this.userId$ = store.select(selectViewIdUser);
  }

  checkId(): Observable<boolean> {
    this.userId$.subscribe( id => {
      if( id === null ){
        return of(false)
      }else {
        return of(true)
      }
    })
    return of(true)
      
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkId()
    .pipe(
      tap( isAuth => {
        if(!isAuth) {
          this.dialog.open(this.noAutenticado);
          this.router.navigateByUrl('/home');}
        })
    );
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkId()
      .pipe(
        tap( isAuth => {
          if(!isAuth) {
            this.dialog.open(this.noAutenticado);
            this.router.navigateByUrl('/home');}
          })
      );
  }
}