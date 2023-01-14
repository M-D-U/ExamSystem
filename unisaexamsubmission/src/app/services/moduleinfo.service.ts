import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModuleinfoService {

  url :string = 'http://127.0.0.1:8000' ;
  constructor(private http:HttpClient) { }

  getTotalModules(){
    return this.http.get(this.url+`/api/moduleinfo`);
  }
}
