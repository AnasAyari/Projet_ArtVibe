import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  requestURL:string = "http://localhost:3000/requests";
  activityURL:string = "http://localhost:3000/activities";
  constructor(private httpClient:HttpClient) { }

  getRequests():Observable<Request[]>{
    return this.httpClient.get<Request[]>(`${this.requestURL}`);
  }
  deleteRequest(requestID:number):Observable<Request>{
    return this.httpClient.delete<Request>(`${this.requestURL}/${requestID}`);
  }
  addParticipant(activityID:number,activity:Activity){
    return this.httpClient.put<Activity>(`${this.activityURL}/${activityID}`,activity);
  }
  saveRequest(request:Request){
    return this.httpClient.post<Request>(`${this.requestURL}`,request)
  }

}
