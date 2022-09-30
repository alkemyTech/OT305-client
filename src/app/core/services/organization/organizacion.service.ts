import { Injectable } from "@angular/core";
import { environment as env } from "src/environments/environment";
import { Observable } from 'rxjs';
import { HttpService } from "../http.service";
import { Organizacion } from "../../models/organizacion.model";

@Injectable({
  providedIn: "root",
})
export class OrganizacionService {
  constructor(private http: HttpService) {}

  getOrganizacion(): Observable<any> {
    return this.http.get<Array<Organizacion>>(env.apiUrl + env.organization);
  }

  setOrganizacion(data: any): Observable<any> {
    return this.http.post(env.apiUrl + env.organization, data);
  }

  updateOrganizacion(data: any): Observable<any> {
    return this.http.patch(`${env.apiUrl + env.organization}/${data.id}`, data);
  }
}
