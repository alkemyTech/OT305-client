import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Novedad } from '../../models/novedad.model';

@Injectable({
  providedIn: 'root'
})
export class NovedadesService {
  baseUrl: string = environment.apiUrl;
  //verificar forma de importar endpoint en enviroment
  news: string = environment.news;

constructor(private httClient: HttpClient) { }

}
