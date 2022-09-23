import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  slidesObtenidosDeApi: any[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.obtenerSlidesDeApi();
  }

  obtenerSlidesDeApi(){
    this.httpService.get("https://ongapi.alkemy.org/api/slides", false)
      .subscribe((response: any) => {
        return this.slidesObtenidosDeApi = response.data;
      })
  }

  eliminarSlide(_event: any){
    //aqui se implementará la llamada a la api para eliminar el slide
  }

}
