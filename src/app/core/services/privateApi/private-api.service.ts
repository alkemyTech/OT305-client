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

  headerAuth(token: string){
    const options = { 
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token
      })
    };
    return options
  }

  getPrivate(ruta: string, token: string ,id?: number ): Observable<any>{
    const options = this.headerAuth(token);
    return this.http.get<any>(`${this.baseUrl}/${ruta}/${id}`, options)
  }

  postPrivate(ruta: string, token: string , body: any ): Observable<any>{
    const options = this.headerAuth(token);
    return this.http.post<any>(`${this.baseUrl}/${ruta}`, body, options)
  }

  putPrivate(ruta: string, token: string ,id: number, body: any ): Observable<any>{
    const options = this.headerAuth(token);
    return this.http.put<any>(`${this.baseUrl}/${ruta}/${id}`, body, options)
  }

  patchPrivate(ruta: string, token: string ,id: number, body: any ): Observable<any>{
    const options = this.headerAuth(token);
    return this.http.patch<any>(`${this.baseUrl}/${ruta}/${id}`, body, options)
  }

  deletePrivate(ruta: string, token: string ,id: number ): Observable<any>{
    const options = this.headerAuth(token);
    return this.http.delete<any>(`${this.baseUrl}/${ruta}/${id}`, options)
  }

  simplePostRequest(ruta: string, body: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/${ruta}`, body);
  }

}
