import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivateApiService {

  baseUrl: string = environment.apiUrl

  constructor( private http:HttpClient) { }

  headerAuth(){
    
    const token = localStorage.getItem("token")
    if(token != null && token != undefined){
      const options = { 
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Bearer': token
        })  
      }
    return options
    };
    return 
  }

  getPrivate(ruta: string, id?: number ): Observable<any>{
    const options = this.headerAuth();
    return this.http.get<any>(`${this.baseUrl}/${ruta}/${id}`, options)
  }

  postPrivate(ruta: string, body: any ): Observable<any>{
    const options = this.headerAuth();
    return this.http.post<any>(`${this.baseUrl}/${ruta}`, body, options)
  }

  putPrivate(ruta: string, id: number, body: any ): Observable<any>{
    const options = this.headerAuth();
    return this.http.put<any>(`${this.baseUrl}/${ruta}/${id}`, body, options)
  }

  patchPrivate(ruta: string, id: number, body: any ): Observable<any>{
    const options = this.headerAuth();
    return this.http.patch<any>(`${this.baseUrl}/${ruta}/${id}`, body, options)
  }

  deletePrivate(ruta: string, id: number ): Observable<any>{
    const options = this.headerAuth();
    return this.http.delete<any>(`${this.baseUrl}/${ruta}/${id}`, options)
  }

  simplePostRequest(ruta: string, body: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/${ruta}`, body);
  }

}
