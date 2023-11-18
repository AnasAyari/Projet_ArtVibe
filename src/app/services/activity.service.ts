import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  activityURL:string = "http://localhost:8088/api/v1/activities";
  constructor(private httpClient:HttpClient){}

  getActivities():Observable<Activity[]>{
    return this.httpClient.get<Activity[]>(this.activityURL);
  }

  
}
