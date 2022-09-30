import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actividad } from '../../models/actividad.model';
import { HttpService } from '../http.service';
import { environment as env } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  url_base: string = 'https://ongapi.alkemy.org/api/activities'

  constructor(private http : HttpService) { }

  getActivities():Observable<any>{
    return this.http.get<Array<Actividad>>(this.url_base);
  }

  getActivityById(id: number):Observable<any>{
    return this.http.get(`${this.url_base}/${id}`, false);
  }

  setActividad(data: any):Observable<any>{
    return this.http.post( this.url_base, data )
  }

  updateActividad(data: any):Observable<any>{
    return this.http.patch(`${this.url_base}/${data.id}`, data )
  }

  searchActivities(query: string){
    return this.http.get(`${env.apiUrl}/activities?search=${query}`, false);
  }
}
