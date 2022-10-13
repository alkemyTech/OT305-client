import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable, Output } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Slide } from "../../models/slide.model";
import { HttpService } from "../http.service";

@Injectable({
  providedIn: "root",
})
export class SlidesService {
  slideParaEditar: any = null;
  baseUrl: string = environment.apiUrl;
  slides: string = environment.slides;
  constructor(private httClient: HttpClient, private httpSevice: HttpService) {}

  setSlideParaEditar(slide: any) {
    this.slideParaEditar = slide;
  }

  getSlideParaEditar() {
    return this.slideParaEditar;
  }
  getSlide(): Observable<Slide[]> {
    return this.httClient.get<any>(`${this.baseUrl}${this.slides}`);
  }
  getSlidebyId(id: number): Observable<Slide[]> {
    return this.httpSevice.get(`${this.baseUrl}${this.slides}/${id}`);
  }
  postSlide(data: any): Observable<Slide[]> {
    return this.httpSevice.post(`${this.baseUrl}${this.slides}`, data);
  }
  patchSlide(data: any): Observable<Slide[]> {
    return this.httpSevice.patch(
      `${this.baseUrl}${this.slides}/${data.id}`,
      data
    );
  }
}
