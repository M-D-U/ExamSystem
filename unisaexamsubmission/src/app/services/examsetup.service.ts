import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExamsetupService {

  url :string = 'http://127.0.0.1:8000' ;
  httpClient: any;
  handleError: any;
  headers: HttpHeaders | { [header: string]: string | string[]; } | undefined;

  constructor( private http:HttpClient ) { }

  uploadExamination(myFormData: any):Observable<any>{
    const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
   return this.http.post<any>(this.url+`/api/examsetup`,myFormData,{
    headers: this.headers
   });
  }

  showExams(){
    return this.http.get<any>(this.url+'/api/examsetups');
  }
}
