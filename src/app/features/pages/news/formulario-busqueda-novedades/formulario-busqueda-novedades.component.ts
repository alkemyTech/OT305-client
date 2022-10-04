
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Novedad } from 'src/app/core/models/novedad.model';
import { HttpService } from 'src/app/core/services/http.service';
import { NovedadesService } from 'src/app/core/services/novedades/novedades.service';
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


  constructor(private novedadService: NovedadesService) {}

  ngOnInit() {
    this.obtenerNovedadesDeApi()
    this.novedad$ = this.subject$.pipe(debounceTime(500),switchMap(data => this.novedadService.getNews(`${this.textoSolicitado}`)))
    this.novedadSubscription = this.novedad$.subscribe((res: any) => {return this.novedad.emit(res);},)
 
  }

  ngOnDestroy() {
    this.novedadSubscription.unsubscribe();
  }

  obtenerNovedadesDeApi(){
    this.novedadSubscription = this.novedadService.listNews().subscribe((res: any) => {
      this.novedades = res 
      return this.novedad.emit(this.novedades) 
    })
  }
  obtenerCategoriaNovedadDeApi(){
  
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

}
  



