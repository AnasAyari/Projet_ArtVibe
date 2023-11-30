import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hobby } from '../models/hobby';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  getHobbies():Observable<Hobby[]>{
    const url1 = 'https://hobbies-by-api-ninjas.p.rapidapi.com/v1/hobbies?category=general';
    const headers: HttpHeaders = new HttpHeaders ({
      'X-RapidAPI-Key': '52dda8f695msh484f288f973a837p116794jsn900f27f243c1',
      'X-RapidAPI-Host': 'hobbies-by-api-ninjas.p.rapidapi.com'
    })
    return this.httpClient.get<Hobby[]>(url1,{headers: headers});
    };
    getImages():Observable<string>{
      const url2 = 'https://any-anime.p.rapidapi.com/v1/anime/gif/1';
      const headers: HttpHeaders = new HttpHeaders ({
          'X-RapidAPI-Key': '52dda8f695msh484f288f973a837p116794jsn900f27f243c1',
          'X-RapidAPI-Host': 'any-anime.p.rapidapi.com'
      })
      return this.httpClient.get<string>(url2,{headers: headers})
    };
}
    

