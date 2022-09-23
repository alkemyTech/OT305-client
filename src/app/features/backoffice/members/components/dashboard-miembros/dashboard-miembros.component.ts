import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-miembros',
  templateUrl: './dashboard-miembros.component.html',
  styleUrls: ['./dashboard-miembros.component.scss']
})
export class DashboardMiembrosComponent{
  title!:string;
  miembro!: any
  
  constructor() {
    this.title = "Dashboard Miembros"
    this.getMiembro()
   }
   
   getMiembro(){
    this.miembro = {
      name: "Name",
      foto: "Foto",
    }
  }
}
