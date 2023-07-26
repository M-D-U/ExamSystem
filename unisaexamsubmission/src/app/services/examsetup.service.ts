import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; 

interface Exam {
  id: number;
  moduleCode: string;
  dateExam: string;
  examPaperPDF: string;
  created_at: string;
  updated_at: string;
}


@Injectable({
  providedIn: 'root'
})
export class ExamsetupService {

  url :string = 'http://127.0.0.1:8000' ;
  httpClient: any;
  handleError: any;
  headers: HttpHeaders | { [header: string]: string | string[]; } | undefined;
  examPaperPDF = '';
  
  constructor( private http:HttpClient ) { }

  uploadExamination(myFormData: any):Observable<any>{
    const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
   return this.http.post<any>(this.url+`/api/examsetup`,myFormData,{
    headers: this.headers
   });
  }
  
/*   downloadPDF(moduleCode :string){
    this.http.get(this.url+'/api/examsetups', { responseType: 'blob' }).subscribe(data => {
      const file = new Blob([data], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
  });
  } */

  showExams(): Observable<Exam[]> {
    return this.http.get<Exam[]>(this.url + '/api/examsetups').pipe(
      tap(response => {
        // Log the original response to the console
        console.log('Original Response from showExams():', response);

        // Get the current date in the format "YYYY-MM-DD"
        const currentDate = new Date().toISOString().split('T')[0];

        // Filter the array to keep only objects with dateExam matching the current date
        const examsForCurrentDate = response.filter(exam => exam.dateExam === currentDate);

        // Log the filtered response to the console
        console.log('Exams for Current Date:', examsForCurrentDate);
      })
    );
}}
