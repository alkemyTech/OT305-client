import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Categoria } from "../../models/categoria.models";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  baseUrl: string = environment.apiUrl;
  categoriesUrl: string = environment.categories;

  constructor(private httClient: HttpClient) {}
  getCategorie(searchCategorie: string): Observable<Categoria[]> {
    return this.httClient
      .get<any>(`${this.baseUrl}${this.categoriesUrl}?search=${searchCategorie}`)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  listCategorie(): Observable<Categoria[]> {
    return this.httClient.get<any>(`${this.baseUrl}${this.categoriesUrl}`).pipe(
      map((response) => {
        return response.data;
      })
    );
  }
}
