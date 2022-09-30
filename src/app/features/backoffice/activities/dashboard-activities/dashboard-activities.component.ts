import { Component, OnInit } from "@angular/core";
import { Actividad } from "src/app/core/models/actividad.model";
import { Categoria } from "src/app/core/models/categoria.models";
import { HttpService } from "src/app/core/services/http.service";

@Component({
  selector: "app-dashboard-activities",
  templateUrl: "./dashboard-activities.component.html",
  styleUrls: ["./dashboard-activities.component.scss"],
})
export class DashboardActivitiesComponent {
  title!: string;
  actividades: Array<Actividad> = [];

  constructor() {
    this.title = "Dashboard Actividades";
  }

  setActividades(value: Actividad[]) {
    this.actividades = value;
  }
}
