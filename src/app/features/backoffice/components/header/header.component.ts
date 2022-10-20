import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Logout_Action } from "src/app/core/ngrx/actions/auth.action";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  token: string | null = null;

  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit(): void {
    if (
      localStorage.getItem("token") != null &&
      localStorage.getItem("token") != undefined
    ) {
      this.token = localStorage.getItem("token");
    }
  }
  logout() {
    this.store.dispatch(Logout_Action());
    console.log("Has cerrado sesion correctamente");
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    localStorage.removeItem("user");

    this.token = null;
    this.router.navigate(["/home"]);
  }
}
