import { Component, OnInit } from '@angular/core';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Novedad } from 'src/app/core/models/novedad.model';
import { NovedadesService } from 'src/app/core/services/novedades/novedades.service';

@Component({
  selector: 'app-dashboard-novedades',
  templateUrl: './dashboard-novedades.component.html',
  styleUrls: ['./dashboard-novedades.component.scss']
})
export class DashboardNovedadesComponent  {
  novedades: Novedad [] = [] 
  title!:string;
  novedad!: any
  subject$: any;
  
  constructor(private novedadService: NovedadesService) {
    this.title = "Dashboard Novedades"
    
   }


 
  


}
 


  

