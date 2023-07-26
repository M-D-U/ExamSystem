import { Component, OnInit } from '@angular/core';
import { ExamsetupService } from '../services/examsetup.service';
import { ExamoutputService } from '../services/examoutput.service';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  startTime = '11:23:11';
  time = new Date();
  uploadTime = new Date().toTimeString();
  studentNumber: string = '51333403';
  date = new Date();
  exams = [  ];
  toasts: any[] = [];
  url: string = 'http://127.0.0.1:8000';
  availableExams: any[] = [];
  isLoading = false;
  now = new Date();
  timeOnly = this.now.toLocaleTimeString([], { hour12: false });
  constructor(
    private loader: LoaderComponent,
    private http: HttpClient,
    private examSetupService: ExamsetupService,
    private examOutputServe: ExamoutputService
  ) {}

  answerPaperPDF: File | any = null;

  // takes in the file input
  onFileSelected(e: any) {
    this.answerPaperPDF = e.target.files[0];
    console.log(
      'checking to see if the file if its there',
      this.answerPaperPDF
    );
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
    if (!this.answerPaperPDF) {
      window.alert('please choose a file before submitting');
      return;
    } else {
      myFormData.append('answerPaperPDF', this.answerPaperPDF);
    }
    myFormData.append('studentNumber', this.studentNumber);
    // call the exam upload service api
    this.examOutputServe.uploadExamination(myFormData).subscribe((res) => {
      headers: headers; //add headers to send form as multipart form
      console.log(res);
      console.log(myFormData);
      if (res.status) {
        window.alert(res.message);
        this.isLoading = false;
      } else {
        window.alert(res.message);
      }
      // Clear only the 'answerPaperPDF' and 'studentNumber' fields
      f.form.reset(
        {
          answerPaperPDF: null,
          // studentNumber: ''
        },
        { onlySelf: true, emitEvent: false }
      );
    });
  }

  // download PDF file
  downloadPDF() {
    const module = 'exam';
    const fileName = `${module}.pdf`;
    console.log(fileName);

    const url = this.url + '/api/examsetups';
    this.http.get(url, { responseType: 'blob' }).subscribe((res) => {
      const file = new Blob([res], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
    });
  }

  ngOnInit(): void {
    console.log(this.timeOnly);
    let dateExam = '2023-07-21';
    let date = new Date(dateExam);

    this.examSetupService.showExams().subscribe((res) => {
      // response shows the exams available for the current day
      this.availableExams = res;
      console.log(this.availableExams);
      this.availableExams = this.availableExams.filter(
        (availableExam) =>
          availableExam.dateExam === new Date().toISOString().slice(0, 10)
      );
    });

    setInterval(() => {
      this.date = new Date(); //shows the current date and time on the application
    }, 1);
  }
}
