import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Novedad } from 'src/app/core/models/novedad.model';
import { NovedadesService } from 'src/app/core/services/novedades/novedades.service';

@Component({
  selector: 'app-detalle-novedad',
  templateUrl: './detalle-novedad.component.html',
  styleUrls: ['./detalle-novedad.component.scss']
})
export class DetalleNovedadComponent implements OnInit, OnDestroy {
title!:string
novedad = new Novedad()
novedadSubscription$!: Subscription

  constructor(private route: ActivatedRoute, private novedadService: NovedadesService) { 
    this.title=" Nombre Novedad"
  }

  ngOnInit() {
   this.novedadSubscription$ = this.novedadService.getNewsbyId((this.route.snapshot.params['id'])).subscribe((res:any)=>{ this.novedad = res.data})
  }

  ngOnDestroy(){
    this.novedadSubscription$.unsubscribe();
  }

}
