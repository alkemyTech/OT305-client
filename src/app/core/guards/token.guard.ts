import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectToken } from "../ngrx/selectors/auth.selector";

@Injectable({
  providedIn: "root",
})
export class TokenGuard implements CanActivate {
  token$ = this.store.select(selectToken);
  constructor(private store: Store<any>, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.token$) {
      this.router.navigate(["/home"]);
    }
    return true;
  }
}
