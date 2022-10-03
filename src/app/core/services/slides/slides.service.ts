import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable, Output } from "@angular/core";
import { HttpService } from "../http.service";

@Injectable({
  providedIn: "root",
})
export class SlidesService {
  slideParaEditar: any = null;

  constructor(private httClient: HttpClient, private httpSevice: HttpService) {}

  setSlideParaEditar(slide: any) {
    this.slideParaEditar = slide;
  }

  getSlideParaEditar() {
    return this.slideParaEditar;
  }
}
