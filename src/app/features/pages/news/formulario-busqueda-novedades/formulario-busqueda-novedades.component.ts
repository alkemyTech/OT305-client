
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Novedad } from 'src/app/core/models/novedad.model';
import { HttpService } from 'src/app/core/services/http.service';
import { NovedadesService } from 'src/app/core/services/novedades/novedades.service';
import { ResponseComponent } from 'src/app/shared/components/alertas/response.component';
import { DashboardNovedadesComponent } from '../dashboard-novedades/dashboard-novedades.component';



@Component({
  selector: 'app-formulario-busqueda-novedades',
  templateUrl: './formulario-busqueda-novedades.component.html',
  styleUrls: ['./formulario-busqueda-novedades.component.scss']
})

export class FormularioBusquedaNovedadesComponent implements OnInit, OnDestroy {


  @Output() novedad = new EventEmitter();
  subject$ = new Subject<string>();
  novedades: Novedad[] = [];
  textoSolicitado!: string;
  novedadSubscription!: Subscription
  novedad$ : any
  categoriaSolicitada: string = "Todos";


  constructor(private novedadService: NovedadesService,  public dialog: MatDialog) {}

  ngOnInit() {
    this.obtenerNovedadesDeApi()
    this.novedad$ = this.subject$.pipe(debounceTime(500),switchMap(data => 
      {
        if(this.categoriaSolicitada != "Todos"){

         return this.novedadService.getNews(`${this.textoSolicitado}&category=${this.categoriaSolicitada}`)
        }
        else{

         return this.novedadService.getNews(`${this.textoSolicitado}`)
        }
      }
    ))
    this.novedadSubscription = this.novedad$.subscribe((res: any) => {return this.novedad.emit(res);},
    (error:any)=>{
      this.openDialog(
        "Error al obtener novedad",
        "La novedad no pudo ser encontrada",
        "Error"
      )
    })
 
  }

  ngOnDestroy() {
    this.novedadSubscription.unsubscribe();
  }

  obtenerNovedadesDeApi(){
    this.novedadSubscription = this.novedadService.listNews().subscribe((res: any) => {
      this.novedades = res 
      return this.novedad.emit(this.novedades) 
    },(error)=>{
      this.openDialog(
        "Error al obtener novedad",
        "La novedad no pudo ser encontrada",
        "Error"
      )
    })
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
  
  searchNovedad(texto: string){
    if(texto.length >= 3){
      this.textoSolicitado = texto;
      this.subject$.next(texto)
    }
    else{
      this.novedad.emit(this.novedades)
    }
  }

  
  setCategoria(categoria: string){
    if(this.textoSolicitado.length >= 2 && this.categoriaSolicitada !== categoria){
      this.categoriaSolicitada = categoria;
      this.subject$.next(categoria);
    }
    else{
      this.categoriaSolicitada = categoria;
    }
  }

}
  



