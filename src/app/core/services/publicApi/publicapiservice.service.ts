import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpService } from "../http.service";

@Injectable({
  providedIn: "root",
})
export class PublicapiserviceService {
  constructor(private httpService: HttpService) {}

  getPublic(url: any, id: null) {
    this.httpService.get(`${url} / ${id}`);
  }
}
