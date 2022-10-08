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
export class NovedadesService {
  baseUrl: string = environment.apiUrl;
  //verificar forma de importar endpoint en enviroment
  news: string = environment.news;

  novedadParaEditar : any = null
constructor(private httpClient: HttpClient, private httpService: HttpService) { }


getNews(searchNews: string): Observable<Novedad[]> {
  return this.httpClient
    .get<any>(`${this.baseUrl}${this.news}?search=${searchNews}`)
    .pipe(
      map((response) => {
        return response.data;
      })
    );
}

listNews(): Observable<Novedad[]> {
  return this.httpClient.get<any>(`${this.baseUrl}${this.news}`).pipe(
    map((response) => {
      return response.data;
    })
  );
}

getNewsbyId(id: number): Observable<Novedad[]> {
  return this.httpService.get(`${this.baseUrl}${this.news}/${id}`);
}

postNews(data: any): Observable<Novedad[]> {
  return this.httpService.post(`${this.baseUrl}${this.news}`, data);
}

patchNews(data: any): Observable<Novedad[]> {
  return this.httpService.patch(
    `${this.baseUrl}${this.news}/${data.id}`,
    data
  );
}

deleteNews(id: number) {
  return this.httpClient.delete(`${this.baseUrl}${this.news}/${id}`);
}



setNovedadParaEditar(novedad: any){
  this.novedadParaEditar = novedad;
}

}
