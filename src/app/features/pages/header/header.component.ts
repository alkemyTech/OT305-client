import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  selectToken,
  selectViewIdUser,
} from "src/app/core/ngrx/selectors/auth.selector";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  show: boolean = false;

  userId$: Observable<number> = new Observable<number>();
  token$!: Observable<any>;

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

  constructor(private store: Store) {
    this.userId$ = store.select(selectViewIdUser);
  }

  ngOnInit(): void {
    this.token$ = this.store.pipe(select(selectToken));
  }

  restrictView(userId$: Observable<number>) {
    userId$.subscribe((id) => {
      if (id === 1) {
        return false;
      }
      return true;
    });
  }
}
