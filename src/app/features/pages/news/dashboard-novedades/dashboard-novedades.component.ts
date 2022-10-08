import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';
import { Novedad } from 'src/app/core/models/novedad.model';
import { NovedadesService } from 'src/app/core/services/novedades/novedades.service';
import { BackofficeRoutingModule } from 'src/app/features/backoffice/backoffice-routing.module';
import { AlertasComponent } from 'src/app/shared/components/alertas/alertas.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-novedades',
  templateUrl: './dashboard-novedades.component.html',
  styleUrls: ['./dashboard-novedades.component.scss']
})
export class DashboardNovedadesComponent implements OnInit, OnDestroy{

  novedades: Novedad [] = [] 
  title!:string;
  subject$ = new Subject()
  novedad!: Novedad 

 
 
  constructor(private novedadService: NovedadesService, public dialog: MatDialog) {
    this.title = "Dashboard Novedades"
  }


  ngOnInit(): void {
    
  }
  
   DeleteNews(id: number){
    
    this.novedadService.deleteNews(id).pipe(takeUntil(this.subject$)).subscribe(data =>{
      this.openDialog("Novedad eliminada!","La novedad eliminada éxitosamente");
    },error =>{
      this.openDialog("La novedad no pudo ser eliminada", error.messagge);
    })

   }

   EditNews(novedad : Novedad){
     this.novedadService.novedadParaEditar(novedad)
   }

   recargarNovedades(){
    this.novedadService.listNews().pipe(takeUntil(this.subject$)).subscribe(res=>{
      this.novedades = res
    })
   }
   


   openDialog(titulo: string, mensaje: string): void {
   
    const dialogRef = this.dialog.open(AlertasComponent, {
      width: "400px",
      data: {
        confirmButtonText: "Cerrar",
        cancelText: "Cerrar",
        confirmText: "Ok",
        message: mensaje,
        title: titulo,
        
      },
    });
    this.recargarNovedades();
  }
  
  ngOnDestroy() {
    this.subject$.next();
    this.subject$.complete();
  }

  }
  



 


  

