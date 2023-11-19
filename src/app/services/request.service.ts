import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  requestURL:string = "http://localhost:8088/api/v1/requests";

  constructor(private httpClient:HttpClient) { }

  getRequests():Observable<Request[]>{
    return this.httpClient.get<Request[]>(this.requestURL);
  }
}
