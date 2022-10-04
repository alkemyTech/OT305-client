import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class NewsHomeService extends HttpService {

  constructor(http: HttpClient) {
    super(http);
  }

  //aqui iran los metodos con las peticiones que necesite usar Home
}
