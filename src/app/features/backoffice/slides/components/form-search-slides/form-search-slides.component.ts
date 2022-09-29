import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-form-search-slides',
  templateUrl: './form-search-slides.component.html',
  styleUrls: ['./form-search-slides.component.scss']
})
export class FormSearchSlidesComponent implements OnInit {

  @Output() slideBuscado = new EventEmitter();

  slidesObtenidosDeApi: any[] = [];

  subject$ = new Subject();

  textoSolicitado!: string;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.obtenerSlidesDeApi();

    this.subject$.pipe(
      debounceTime(500),
      switchMap(data =>
        this.httpService.get(`https://ongapi.alkemy.org/api/slides?search=${this.textoSolicitado}`, false))
      )
      .subscribe((res: any) => {
        return this.slideBuscado.emit(res.data);
      })
  }

  obtenerSlidesDeApi(){
    this.httpService.get("https://ongapi.alkemy.org/api/slides", false)
      .subscribe((response: any) => {
        this.slidesObtenidosDeApi = response.data;
        return this.slideBuscado.emit(this.slidesObtenidosDeApi);
      })
  }

  searchSlide(texto: string){
    if(texto.length >= 3){
      this.textoSolicitado = texto;
      this.subject$.next(texto);
    }
    else{
      this.slideBuscado.emit(this.slidesObtenidosDeApi);
    }
  }

}
