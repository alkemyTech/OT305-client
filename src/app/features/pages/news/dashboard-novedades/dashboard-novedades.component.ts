import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Novedad } from 'src/app/core/models/novedad.model';
import { NovedadesService } from 'src/app/core/services/novedades/novedades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-novedades',
  templateUrl: './dashboard-novedades.component.html',
  styleUrls: ['./dashboard-novedades.component.scss']
})
export class DashboardNovedadesComponent implements OnInit {
  novedades: Novedad [] = [] 
  title!:string;
  novedad!: Novedad 
  id!: number 
  
  constructor(private novedadService: NovedadesService) {
    this.title = "Dashboard Novedades"
   
   }

   ngOnInit(): void {}


   DeleteNews(id: number){

    this.novedadService.deleteNews(id).subscribe(res =>{
      console.log(id)
      console.log(res)
    },error =>{
      console.log("no se ha podido eliminar la novedad")
    })
      
   }

 
  


}
 


  

