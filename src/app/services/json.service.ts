import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) { }
  
  getJson(url:string)
    {
      return this.http.get(url);
    }

  post(url:string, body){
    return this.http.post(url, body) //Metodo POST
  }
  
}