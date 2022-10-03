import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { environment as env } from 'src/environments/environment';
import { Contacts } from '../../models/contacts.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {


  constructor(private http: HttpService) { }

  getContacts():Observable<any>{
    return this.http.get<Array<Contacts>>(env.apiUrl + env.contacts);
  }

  getContactById(id: number):Observable<any>{
    return this.http.get(`${env.apiUrl + env.contacts}/${id}`, false);
  }

  setContact(data: any):Observable<any>{
    return this.http.post( env.apiUrl + env.contacts, data )
  }

  updateContact(data: any):Observable<any>{
    return this.http.patch(`${env.apiUrl + env.contacts}/${data.id}`, data )
  }

}
