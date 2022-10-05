import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Novedad } from 'src/app/core/models/novedad.model';
import { NovedadesService } from 'src/app/core/services/novedades/novedades.service';

@Component({
  selector: 'app-detalle-novedad',
  templateUrl: './detalle-novedad.component.html',
  styleUrls: ['./detalle-novedad.component.scss']
})
export class DetalleNovedadComponent implements OnInit {
title!:string
novedad = new Novedad()

  constructor(private route: ActivatedRoute, private novedadService: NovedadesService) { 
    this.title=" Nombre Novedad"
    
  }
  ngOnInit() {
   
   this.novedadService.getNewsbyId((this.route.snapshot.params['id'])).subscribe((res:any)=>{
      this.novedad = res.data
     
     
      
   })

  }

}
