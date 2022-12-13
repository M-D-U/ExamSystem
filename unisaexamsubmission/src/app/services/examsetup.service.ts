import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ExamsetupService {

  url :string = 'http://127.0.0.1:8000' ;
  constructor( private http:HttpClient) { }

  showExams(){
    return this.http.get<any>(this.url+'/api/examsetups');
  }
}
