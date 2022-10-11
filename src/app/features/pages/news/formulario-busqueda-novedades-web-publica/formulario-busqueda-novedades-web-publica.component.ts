import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Novedad } from 'src/app/core/models/novedad.model';
import { NovedadesService } from 'src/app/core/services/novedades/novedades.service';

@Component({
  selector: 'app-formulario-busqueda-novedades-web-publica',
  templateUrl: './formulario-busqueda-novedades-web-publica.component.html',
  styleUrls: ['./formulario-busqueda-novedades-web-publica.component.scss']
})
export class FormularioBusquedaNovedadesWebPublicaComponent implements OnInit, OnDestroy {

  @Output() novedad = new EventEmitter();
  subject$ = new Subject<string>();
  novedades: Novedad[] = [];
  textoSolicitado!: string;
  novedadSubscription!: Subscription
  novedad$ : any
  constructor(private novedadService: NovedadesService) { }

  ngOnInit() {
    this.obtenerNovedadesDeApi()
    this.novedad$ = this.subject$.pipe(debounceTime(500),switchMap(data => this.novedadService.getNews(`${this.textoSolicitado}`)))
    this.novedadSubscription = this.novedad$.subscribe((res: any) => {return this.novedad.emit(res);},)
  }
  ngOnDestroy(): void {
    this.novedadSubscription.unsubscribe()
  }
  
  obtenerNovedadesDeApi(){
    this.novedadSubscription = this.novedadService.listNews().subscribe((res: any) => {
      this.novedades = res 
      return this.novedad.emit(this.novedades) 
    })
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
