import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Member } from "../../models/member.model";
import { HttpService } from "../http.service";

@Injectable({
  providedIn: "root",
})
export class MembersService {
  baseUrl: string = environment.apiUrl;
  member: string = environment.member;
  constructor(
    private httClient: HttpClient,
    private httpService: HttpService
  ) {}

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
  getMemberbyId(id: number): Observable<Member[]> {
    return this.httpService.get(`${this.baseUrl}${this.member}/${id}`);
  }
  postMember(data: any): Observable<Member[]> {
    return this.httpService.post(`${this.baseUrl}${this.member}`, data);
  }
  patchMember(data: any): Observable<Member[]> {
    return this.httpService.patch(
      `${this.baseUrl}${this.member}/${data.id}`,
      data
    );
  }
  deleteMember(id: number) {
    return this.httClient.delete(`${this.baseUrl}${this.member}/${id}`);
  }
}
