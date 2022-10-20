import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { selectViewIdUser } from '../ngrx/selectors/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class UserRegularAutenticadoGuard implements CanActivate {

  userId$: Observable<number | null> = new Observable<number>();

  constructor(private store: Store, private router: Router){
    this.userId$ = store.select(selectViewIdUser);
  }

  checkId(): Observable<boolean>{
    let userRegular!: boolean;
    this.userId$.subscribe(id => {
      if(id === 1){
        return userRegular = true;
      }
      else{
        return userRegular = false;
      }
    })
    if(userRegular){
      return of(true);
    }
    else{
      return of(false);
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkId()
      .pipe(
        tap(isRegularUser => {
          if(!isRegularUser){
            return this.router.navigate(["/home"])
          }
          else{
            return true;
          }
        })
      );
  }
  
}
