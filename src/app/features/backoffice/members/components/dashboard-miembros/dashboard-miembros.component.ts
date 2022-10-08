import { Component, OnInit } from "@angular/core";
import { Member } from "src/app/core/models/member.model";

@Component({
  selector: "app-dashboard-miembros",
  templateUrl: "./dashboard-miembros.component.html",
  styleUrls: ["./dashboard-miembros.component.scss"],
})
export class DashboardMiembrosComponent {
  title!: string;
  members: Member[] = [];

  constructor() {
    this.title = "Dashboard Miembros";
  }
  setMiembros(value: Member[]) {
    this.members = value;
  }
}
