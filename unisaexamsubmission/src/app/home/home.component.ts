import { Component, OnInit } from '@angular/core';
import { ExamsetupService } from '../services/examsetup.service';
import { ExamoutputService } from '../services/examoutput.service';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoaderComponent } from '../loader/loader.component';
// import { ToastComponent } from '../toast.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  startTime = '11:23:11';
  time = new Date();
  uploadTime = new Date().toTimeString();
  // user = 'OD MASEKO';
  studentNumber: string = '51333403';
  date = new Date();
  exams = [
    /* { name: 'Math', date: new Date(2023, 1, 6) },
    { name: 'Science', date: new Date(2023, 1, 6) },
    { name: 'English', date: new Date(2023, 1, 8) } */
  ];
  toasts: any[] = [];
  url :string = 'http://127.0.0.1:8000' ;
  availableExams: any[] = []; 
  isLoading = false;
   now = new Date();
   timeOnly = this.now.toLocaleTimeString([], { hour12: false });
  constructor(private loader: LoaderComponent,private http:HttpClient, private examSetupService: ExamsetupService,private examOutputServe: ExamoutputService) {}

  answerPaperPDF: File | any = null;

  
  // takes in the file input 
  onFileSelected(e:any) {
    this.answerPaperPDF =e.target.files[0];
    console.log('checking to see if the file if its there', this.answerPaperPDF);
  }

  // uploads the exam data to the API
  onUpload(f: NgForm) {
    var myFormData = new FormData();
    const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      // add information to form data
      myFormData.append('startTime', this.timeOnly);
      myFormData.append('uploadTime', this.uploadTime);
      // check if user has inserted a file before uploading 
      if(!this.answerPaperPDF){
        window.alert('please choose a file before submitting');
        return 
      }else{
        myFormData.append('answerPaperPDF', this.answerPaperPDF);
      };
      myFormData.append('studentNumber',this.studentNumber)
    // call the exam upload service api
    // this.isLoading = true;
    this.examOutputServe.uploadExamination(myFormData).subscribe((res) => {
      headers: headers//add headers to send form as multipart form
      console.log(res);
      console.log(myFormData);
      if(res.status){
        window.alert(res.message);
        this.isLoading = false;
        // this.toasts.push({ text: res.message, headertext: 'itt works', autohide: true, delay: 3000 });
      }else{ 
        window.alert(res.message)
        // this.toasts.push({ text: res.message, headertext: 'itt works', autohide: true, delay: 3000 })
      }
      // Clear only the 'answerPaperPDF' and 'studentNumber' fields
      f.form.reset({
        answerPaperPDF: null,
        // studentNumber: ''
      }, { onlySelf: true, emitEvent: false });
    });
  }

  downloadPDF(){
    const module = 'exam';
    const fileName = `${module}.pdf`;
    console.log(fileName);
    
    const url = this.url+'/api/examsetups';
    this.http.get(url, { responseType: 'blob' }).subscribe(res => {
      const file = new Blob([res], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      // const a = document.createElement('a');
      // a.href = fileURL;
      // a.download = fileName;
      // document.body.appendChild(a);
      // a.click();
    });
  
  }
/* showToast() {
      this.toast.show('Hello, this is a toast message!');
    } */
  // initializes the date
  ngOnInit(): void {
    
    console.log(this.timeOnly);
  let  dateExam = '';
  let date = new Date(dateExam);
   this.examSetupService.showExams().subscribe((res) => {
      // response shows the exams availbale
      this.availableExams = res;
      console.log(this.availableExams);
      this.availableExams = this.availableExams.filter(availableExam => availableExam.date.toDateString() === new Date().toDateString());
    });
    
    setInterval(() => {
      this.date = new Date();//shows the current date and time on the application
    }, 1);
    // this.exams = this.exams.filter(exam => exam.date.toDateString() === new Date().toDateString());
  
  }
 
}
