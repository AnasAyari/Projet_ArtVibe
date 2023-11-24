import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  commentURL:string = "http://localhost:3000/api/v1/comments";

  constructor(private httpClient:HttpClient) { }

  getComments():Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(`${this.commentURL}`)
  }
}