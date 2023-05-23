import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getService(endpoint: string, parameters: string): Observable<any> {
    const sUrl = `${environment.dataServiceUrl}/${endpoint}${parameters}`;

    return this.http.get<any>(sUrl);
  }



}
