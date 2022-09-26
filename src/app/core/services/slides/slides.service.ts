import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {

  slideParaEditar: any = null;

  constructor() { }

  setSlideParaEditar(slide: any){
    this.slideParaEditar = slide;
  }

  getSlideParaEditar(){
    return this.slideParaEditar;
  }

} 
