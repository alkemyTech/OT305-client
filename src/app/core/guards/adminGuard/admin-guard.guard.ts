import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { PrivateApiService } from "../../services/privateApi/private-api.service";

@Injectable({
  providedIn: "root",
})
export class AdminGuardGuard implements CanActivate {
  rol: any;

  constructor(private privateApi: PrivateApiService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.privateApi.obtenerToken()) {
      this.router.navigate(["/home"]);
      return false;
    }
    return true;
  }
}
