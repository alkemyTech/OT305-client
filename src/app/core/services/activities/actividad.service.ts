import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actividad } from '../../models/actividad.model';
import { HttpService } from '../http.service';
import { environment as env } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActividadService extends HttpService {

  constructor(http: HttpClient) { 
    super(http)
  }

  getActivities():Observable<any>{
    return this.get<Array<Actividad>>(env.apiUrl + env.activities);
  }

  getActivityById(id: number):Observable<any>{
    return this.get(`${ env.apiUrl + env.activities }/${ id }`, false);
  }

  setActividad(data: any):Observable<any>{
    return this.post( env.apiUrl + env.activities, data )
  }

  updateActividad(data: any):Observable<any>{
    return this.patch(`${ env.apiUrl + env.activities }/${ data.id }`, data )
  }

  searchActivities(query: string){
    return this.get(`${ env.apiUrl + env.activities }?search=${ query }`, false);
  }
}
