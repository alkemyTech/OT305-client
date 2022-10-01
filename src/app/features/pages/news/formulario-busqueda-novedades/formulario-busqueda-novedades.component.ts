import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Novedad } from 'src/app/core/models/novedad.model';
import { HttpService } from 'src/app/core/services/http.service';
import { NovedadesService } from 'src/app/core/services/novedades/novedades.service';

@Component({
  selector: 'app-formulario-busqueda-novedades',
  templateUrl: './formulario-busqueda-novedades.component.html',
  styleUrls: ['./formulario-busqueda-novedades.component.scss']
})
export class FormularioBusquedaNovedadesComponent implements OnInit {

  
  @Output() novedad = new EventEmitter();
  subject$ = new Subject<string>();
  novedades: Novedad[] = [];
  textoSolicitado!: string;

  constructor(private novedadService: NovedadesService) { }

  
  ngOnInit() {}


  searchNovedad(texto: string){
    if(texto.length >= 3){
      this.textoSolicitado = texto;
      this.subject$.next(texto);
     
   
    }
    else{
      this.novedad.emit(this.novedades);
     
    }
  }
    
  }

  




  


