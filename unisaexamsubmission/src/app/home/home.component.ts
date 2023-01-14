import { Component, OnInit } from '@angular/core';
import { ExamsetupService } from '../services/examsetup.service';
import { ExamoutputService } from '../services/examoutput.service';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  startTime = '11:23:11';
  uploadTime = new Date().toTimeString();
  user = 'OD MASEKO';
  studentNumber: string = '51333403';
  date = new Date();
  examSetup = {name: 'CHE1809',DateExam: new Date(20220629),Description: ' Introductory Chemisty in Industrial Development',staffEmail: 'jh.nel@unisa.ac.za'};// ExamPaper: '../assets/exampaper/101_2020_3b.pdf' };
  constructor(private examSetupService: ExamsetupService,private examOutputServe: ExamoutputService) {}

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
      myFormData.append('startTime', this.startTime);
      myFormData.append('uploadTime', this.uploadTime);
      myFormData.append('answerPaperPDF', this.answerPaperPDF);
      myFormData.append('studentNumber',this.studentNumber)
    // call the exam upload service api
    this.examOutputServe.uploadExamination(myFormData).subscribe((res) => {
      headers: headers//add headers to send form as multipart form
      console.log(res);
      console.log(myFormData);
      if(res.status){
        window.alert(res.message)
      };
    });
    
  }

  // initializes the date
  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date();//shows the current date and time on the application
    }, 1);
  }
 
}
