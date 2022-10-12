import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Logout_Action } from "src/app/core/ngrx/actions/auth.action";
import {
  selectToken,
  selectViewIdUser,
} from "src/app/core/ngrx/selectors/auth.selector";
import { ResponseComponent } from "src/app/shared/components/alertas/response.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  show: boolean = false;
  token$ = this.store.select(selectToken);
  userId$: Observable<number | null> = new Observable<number>();
  registerView = this.restrictView(this.userId$);

  public = [
    { texto: "Inicio", link: "/home", show: true },
    { texto: "Actividades", link: "/actividades", show: true },
    { texto: "Nosotros", link: "/nosotros", show: true },
    { texto: "Novedades", link: "/novedades", show: true },
    { texto: "Testimonios", link: "/testimonios", show: true },
    {
      texto: "Contacto",
      link: "/contacto",
      show: this.restrictView(this.userId$),
    },
  ];

  campaigns = [
    { texto: "Materiales Escolares", link: "/landing/escolar", show: true },
    { texto: "Juguetes", link: "/landing/juguetes", show: true },
  ];

  constructor(
    private store: Store<any>,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.userId$ = store.select(selectViewIdUser);
    this.token$ = this.store.select(selectToken);
  }

  ngOnInit(): void {}

  restrictView(userId$: Observable<number | null>) {
    userId$.subscribe((id) => {
      if (id === 1) {
        return false;
      }
      return true;
    });
  }
  signOut() {
    this.store.dispatch(Logout_Action());
    this.openDialog("Has cerrado sesion correctamente", "vuelve pronto!");
    this.router.navigate(["/home"]);
  }

  openDialog(titulo: string, mensaje: string): void {
    this.dialog.open(ResponseComponent, {
      width: "355px",
      data: {
        message: mensaje,
        title: titulo,
        type: "Success",
      },
    });
  }
}
