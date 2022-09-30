import { Component, OnInit } from '@angular/core';
import { Novedad } from 'src/app/core/models/novedad.model';

@Component({
  selector: 'app-dashboard-novedades',
  templateUrl: './dashboard-novedades.component.html',
  styleUrls: ['./dashboard-novedades.component.scss']
})
export class DashboardNovedadesComponent  {
  novedades: Novedad [] = [] 
  title!:string;
  novedad!: any
  
  constructor() {
    this.title = "Dashboard Novedades"
   }

  


}
 


  

