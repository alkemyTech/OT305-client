import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { environment as env } from 'src/environments/environment';
import { Categoria } from '../../models/categoria.models';

@Injectable({
  providedIn: 'root'
})
export class CategorieshttpService {

  constructor(private http: HttpService) { 
  }

  getCategoria():Observable<any>{
    return this.http.get<Array<Categoria>>(env.apiUrl + env.categories);
  }

  getCategoriaById(id: number):Observable<any>{
    return this.http.get(`${ env.apiUrl + env.categories }/${ id }`, false);
  }

  setCategoria(data: any):Observable<any>{
    return this.http.post( env.apiUrl + env.categories, data )
  }

  updateCategoria(data: any):Observable<any>{
    return this.http.patch(`${ env.apiUrl + env.categories }/${ data.id }`, data )
  }

  searchCategoria(query: string){
    return this.http.get(`${ env.apiUrl + env.categories }?search=${ query }`, false);
  }
}
