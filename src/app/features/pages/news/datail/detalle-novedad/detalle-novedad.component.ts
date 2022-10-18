import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Novedad } from 'src/app/core/models/novedad.model';
import { NovedadesService } from 'src/app/core/services/novedades/novedades.service';
import { ResponseComponent } from 'src/app/shared/components/alertas/response.component';

@Component({
  selector: 'app-detalle-novedad',
  templateUrl: './detalle-novedad.component.html',
  styleUrls: ['./detalle-novedad.component.scss']
})
export class DetalleNovedadComponent implements OnInit, OnDestroy {
title!:string
novedad = new Novedad()

novedadSubscription$!: Subscription

  constructor(private route: ActivatedRoute, private router : Router, private novedadService: NovedadesService, public dialog: MatDialog,) { 
    this.title=" Nombre Novedad"
  }

  ngOnInit() {
   this.novedadSubscription$ = this.novedadService.getNewsbyId((this.route.snapshot.params['id'])).subscribe((res:any)=>{ this.novedad = res.data},(error)=>{
            this.openDialog(
              "Error al obtener novedad",
              "La novedad no pudo ser encontrada",
              "Error"
            )
            this.router.navigate(['novedades'])
         
   })
  }

  ngOnDestroy(){
    this.novedadSubscription$.unsubscribe();
  }

  openDialog(titulo: string, mensaje: string, tipo: string): void {
    const dialogRef = this.dialog.open(ResponseComponent, {
      data: {
        message: mensaje,
        title: titulo,
        type: tipo,
      },
    });
  }

}
