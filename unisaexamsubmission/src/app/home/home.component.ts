import { Component, OnInit } from '@angular/core';
import { ExamsetupService } from '../services/examsetup.service';
import { ExamoutputService } from '../services/examoutput.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  startTime = '10:23:11';
  uploadTime = '11:23:11'
  user = 'OD MASEKO';
  studentNumber = 51331403
  date = new Date();
  uploadDocument = '';
  exam = '';
  // examUpload: any;
  examUpload: any;
  // answerPaperPDF: { answerPaperPDF: string; }; 
  examSetup = {name: 'CHE1809', DateExam: new Date(20220629), Description:' Introductory Chemisty in Industrial Development', staffEmail: 'jh.nel@unisa.ac.za', ExamPaper: '../assets/exampaper/101_2020_3b.pdf'};
  constructor(private formBuilder: FormBuilder, private examSetupService: ExamsetupService, private examOutputServe:ExamoutputService) { }

  
  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date();
    }, 1);

    this.examUpload = this.formBuilder.group({
      exam: ''
    })
    // console.log(this.studentNumber,this.startTime,this.uploadTime,this.answerPaperPDF)
  }

  uploadExam(exam:string){
    this.examUpload = {
      'startTime' : this.startTime,
      'uploadTime' : this.uploadTime,
      'answerPaperPDF': this.exam,
      'studentNumber' : this.studentNumber
    }; 
    console.log(this.studentNumber +'my stuff ');
  } 

 }
