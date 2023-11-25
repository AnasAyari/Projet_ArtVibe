import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  commentURL:string = "http://localhost:3000/comments";

  constructor(private httpClient:HttpClient) { }

  getComments():Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(`${this.commentURL}`)
  }
  getCommentById(commentID:number){
    return this.httpClient.get<Comment>(`${this.commentURL}/${commentID}`);
  }
  saveComment(comment:Comment){
    return this.httpClient.post<any>(`${this.commentURL}`,comment);
  }
}
