import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Novedad } from '../../models/novedad.model';
import { HttpService } from '../http.service';


@Injectable({
  providedIn: 'root'
})
export class NovedadesService extends HttpService {
  baseUrl: string = environment.apiUrl;
  //verificar forma de importar endpoint en enviroment
  news: string = environment.news;

  novedadParaEditar : any = null
  constructor(http: HttpClient, private httpp: HttpClient) { 
    super(http)
  }


getNews(searchNews: string): Observable<any> {
  return this
    .get<any>(`${this.baseUrl}${this.news}?search=${searchNews}`)
    .pipe(
      map((response) => {
        return response.data;
      })
    );
}

listNews(): Observable<any> {
  return this.get<any>(`${this.baseUrl}${this.news}`).pipe(
    map((response) => {
      return response.data;
    })
  );
}

getNewsbyId(id: number): Observable<any> {
  return this.get(`${this.baseUrl}${this.news}/${id}`);
}

postNews(data: any): Observable<any> {
  return this.post(`${this.baseUrl}${this.news}`, data);
}

patchNews(data: any): Observable<any> {
  return this.patch(
    `${this.baseUrl}${this.news}/${data.id}`,
    data
  );
}

deleteNews(id: number) {
  return this.httpp.delete(`${this.baseUrl}${this.news}/${id}`);
}



setNovedadParaEditar(novedad: any){
  this.novedadParaEditar = novedad;
}

}
