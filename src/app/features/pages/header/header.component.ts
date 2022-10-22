import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  Login_Request_Success_Action,
  Logout_Action,
} from "src/app/core/ngrx/actions/auth.action";
import {
  selectAuthFeature,
  selectViewIdUser,
} from "src/app/core/ngrx/selectors/auth.selector";
import { PrivateApiService } from "src/app/core/services/privateApi/private-api.service";
import { ResponseComponent } from "src/app/shared/components/alertas/response.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  show: boolean = false;
  token: any;
  rol: any;
  userId$: Observable<number | null> = new Observable<number>();
  user = null;

  registerView = this.restrictView(this.userId$);

  isRegularUser = this.verifyRegularUser(this.userId$);

  public = [
    { texto: "Inicio", link: "/home", show: true },
    { texto: "Actividades", link: "/actividades", show: true },
    { texto: "Nosotros", link: "/nosotros", show: true },
    { texto: "Novedades", link: "/novedades", show: true },
    { texto: "Testimonios", link: "/testimonios", show: true },
  ];

  campaigns = [
    { texto: "Materiales Escolares", link: "/landing/escolar", show: true },
    { texto: "Juguetes", link: "/landing/juguetes", show: true },
  ];

  constructor(
    private store: Store<any>,
    private router: Router,
    public dialog: MatDialog,
    private privateService: PrivateApiService
  ) {
    this.userId$ = store.select(selectViewIdUser);
    this.token = this.privateService.obtenerToken();
  }

  ngOnInit(): void {
    let res = {
      token: localStorage.getItem("token"),
      user: JSON.parse(localStorage.getItem("user") || "{}"),
      rol_id: Number(localStorage.getItem("rol")),
    };

    this.store.dispatch(Login_Request_Success_Action({ data: res }));

    this.store.select(selectAuthFeature).subscribe((user: any) => {
      this.token = user.token;
      this.rol = user.rol_id;
      this.user = user.user;

      if (this.user !== null) this.definirPublic(true);
      else this.definirPublic(false);
    });
  }

  definirPublic(logged: boolean) {
    this.public = [
      { texto: "Inicio", link: "/home", show: true },
      { texto: "Actividades", link: "/actividades", show: true },
      { texto: "Nosotros", link: "/nosotros", show: true },
      { texto: "Novedades", link: "/novedades", show: true },
      { texto: "Testimonios", link: "/testimonios", show: true },
      {
        texto: "Contacto",
        link: "/contacto",
        show: logged,
      },
    ];
  }

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
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    localStorage.removeItem("user");

    this.token = null;
    this.rol = null;
    // window.location.reload();
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
  verifyRegularUser(userId$: Observable<number | null>) {
    userId$.subscribe((id) => {
      if (id === 2) {
        return true;
      }
      return false;
    });
  }
}
