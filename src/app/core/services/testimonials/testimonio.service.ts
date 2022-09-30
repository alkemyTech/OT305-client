import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestimonioService {
  constructor(private http : HttpService) { }

  getTestimonios():Observable<any>{
    return this.http.get<Array<any>>(env.apiUrl + env.testimonials);
  }

  getTestimonioById(id: number):Observable<any>{
    return this.http.get(`${env.apiUrl + env.testimonials}/${id}`, false);
  }

  setTestimonio(data: any):Observable<any>{
    return this.http.post( env.apiUrl + env.testimonials, data )
  }

  updateTestimonio(data: any):Observable<any>{
    return this.http.patch(`${env.apiUrl + env.testimonials}/${data.id}`, data )
  }
}
