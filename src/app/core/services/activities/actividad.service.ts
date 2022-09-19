import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(private http : HttpClient) { }

  getActivities():Observable<any>{
    return this.http.get<Array<any>>('https://ongapi.alkemy.org/api/activities');
  }
}
