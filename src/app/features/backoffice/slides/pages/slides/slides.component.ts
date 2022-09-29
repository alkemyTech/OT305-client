import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/core/models/slide.model';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  slidesObtenidosDeApi: Slide[] = [];

  constructor() { }

  ngOnInit(): void { }

  eliminarSlide(_event: Slide){
    //aqui se implementará la llamada a la api para eliminar el slide
  }

}
