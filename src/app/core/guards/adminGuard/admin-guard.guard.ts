import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdminGuardGuard implements CanActivate {
  rol: any;

  constructor(private router: Router) {
    this.rol = JSON.parse(localStorage.getItem("rol")!);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.rol === 2) {
      this.router.navigate(["/home"]);
      return false;
    }
    return true;
  }
}
