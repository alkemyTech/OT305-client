import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  slidesObtenidosDeApi: any[] = [];

  constructor() { }

  ngOnInit(): void { }

  eliminarSlide(_event: any){
    //aqui se implementará la llamada a la api para eliminar el slide
  }

}
