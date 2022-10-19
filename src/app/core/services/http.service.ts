import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private _groupId!: string;
  private _headers!: HttpHeaders;

  constructor(private http: HttpClient) {
    this._headers = new HttpHeaders({ Group: this._groupId });
  }

  public get<T>(url: string, activateHeader:boolean = false ):Observable<T> {
    return this.http.get<T>(url, activateHeader ? { headers: this._headers }: {});
  }

  public post<T>(url: string, data: object, activateHeader:boolean = false ):Observable<any> {
    return this.http.post<any>(url, data, activateHeader ? { headers: this._headers }: {});
  }

  public patch<T>(url: string, data: object, activateHeader:boolean = false ):Observable<T> {
    return this.http.put<T>(url, data, activateHeader ? { headers: this._headers }: {});
  }

  public put<T>(url: string, data: object, activateHeader:boolean = false ):Observable<T> {
    return this.http.put<T>(url, data, activateHeader ? { headers: this._headers }: {});
  }

  
}

