import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { environment as env } from 'src/environments/environment';
import { Usuario } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpService) {}

  getUser():Observable<any>{
    return this.http.get<Array<Usuario>>(env.apiUrl + env.users);
  }

  getUserById(id: number):Observable<any>{
    return this.http.get(`${ env.apiUrl + env.users }/${ id }`, false);
  }

  setUser(data: any):Observable<any>{
    return this.http.post( env.apiUrl + env.users, data )
  }

  updateUser(data: any):Observable<any>{
    return this.http.patch(`${ env.apiUrl + env.users }/${ data.id }`, data )
  }

  searchUser(query: string){
    return this.http.get(`${ env.apiUrl + env.users }?search=${ query }`, false);
  }
}
