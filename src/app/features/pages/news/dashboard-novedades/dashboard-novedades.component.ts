import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-novedades',
  templateUrl: './dashboard-novedades.component.html',
  styleUrls: ['./dashboard-novedades.component.scss']
})
export class DashboardNovedadesComponent  {
  title!:string;
  novedad!: any
  
  constructor() {
    this.title = "Dashboard Novedades"
    this.getNovedad()
   }

   getNovedad(){
    this.novedad = {
      name: "Name",
      image: "Image",
      created_at: "Create_At",
    }
  }
}
 


  

