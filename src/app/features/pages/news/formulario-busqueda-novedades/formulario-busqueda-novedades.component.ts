import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Novedad } from 'src/app/core/models/novedad.model';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-formulario-busqueda-novedades',
  templateUrl: './formulario-busqueda-novedades.component.html',
  styleUrls: ['./formulario-busqueda-novedades.component.scss']
})
export class FormularioBusquedaNovedadesComponent implements OnInit {

  
  @Output() novedad = new EventEmitter();
  subject$ = new Subject();
  novedades: Novedad[] = [];
  textoSolicitado!: string;

  constructor(private httpService: HttpService) { }

  ngOnInit() {

    this.subject$.pipe(
      debounceTime(500),
      switchMap(data =>
        this.httpService.get(`https://ongapi.alkemy.org/api/news?search=${this.textoSolicitado}`, false))
      )
      .subscribe((res: any) => {
        console.log(res.data)
        
        return this.novedad.emit(res.data);
       
      })

  }

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
