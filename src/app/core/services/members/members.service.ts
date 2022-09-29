import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Member } from "../../models/member.model";

@Injectable({
  providedIn: "root",
})
export class MembersService {
  baseUrl: string = environment.apiUrl;
  //verificar forma de importar endpoint en enviroment
  member: string = environment.member;
  constructor(private httClient: HttpClient) {}

  getMember(searchMember: string): Observable<Member[]> {
    return this.httClient
      .get<any>(`${this.baseUrl}${this.member}?search=${searchMember}`)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }
  listMember(): Observable<Member[]> {
    return this.httClient.get<any>(`${this.baseUrl}${this.member}`).pipe(
      map((response) => {
        return response.data;
      })
    );
  }
}
