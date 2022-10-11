import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { selectViewIdUser } from '../ngrx/selectors/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate, CanLoad {

  userId$: Observable<number|null> = new Observable<number>();
  

  constructor( private store: Store, private router: Router) {
    this.userId$ = store.select(selectViewIdUser);
  }

  checkId(): Observable<boolean> {
    this.userId$.subscribe( id => {
      if( id === 1 ){
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
      tap( isAdmin => {
        if(!isAdmin) {
          this.router.navigateByUrl('/home');}
        })
    );
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkId()
      .pipe(
        tap( isAdmin => {
          if(!isAdmin) {
            this.router.navigateByUrl('/home');}
          })
      );
  }
}
