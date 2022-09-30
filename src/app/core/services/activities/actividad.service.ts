import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actividad } from '../../models/actividad.model';
import { HttpService } from '../http.service';
import { environment as env } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(private http : HttpService) { }

  getActivities():Observable<any>{
    return this.http.get<Array<Actividad>>(env.apiUrl + env.activities);
  }

  getActivityById(id: number):Observable<any>{
    return this.http.get(`${env.apiUrl + env.activities}/${id}`, false);
  }

  setActividad(data: any):Observable<any>{
    return this.http.post( env.apiUrl + env.activities, data )
  }

  updateActividad(data: any):Observable<any>{
    return this.http.patch(`${env.apiUrl + env.activities}/${data.id}`, data )
  }

  searchActivities(query: string){
    return this.http.get(`${env.apiUrl + env.activities}?search=${query}`, false);
  }
}
