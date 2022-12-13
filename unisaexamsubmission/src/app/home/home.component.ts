import { Component, OnInit } from '@angular/core';
import { ExamsetupService } from '../services/examsetup.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  randomstring = '';
  user = 'OD MASEKO';
  studentNumber = 51331403
  date = new Date();
  uploadDocument = false;
  // examSetup = {name: 'CHE1809', DateExam: new Date(20220629), Description:' Introductory Chemisty in Industrial Development', staffEmail: 'jh.nel@unisa.ac.za', ExamPaper: '../assets/exampaper/101_2020_3b.pdf'};
  constructor( private examSetupService: ExamsetupService) { }

  availableExams: any;
  ngOnInit(): void {
    // this.showDate();
    setInterval(() => {
      this.date = new Date();
    }, 1);

    // this.showExams();
    this.todayExam();
  }


  showExams(){
    this.availableExams = this.examSetupService.showExams().subscribe(examsetup=>{
      this.availableExams = examsetup;
      console.log(this.availableExams);
      
    });
  }

  // check for todays exams for the specific student
  todayExam(){
    /* if(this.examSetup.name ==='CHE1709'){
      console.log('today  are  writng');
    }else{
      console.log('relax for today');
      console.log('your exam is on the '+ this.examSetup.DateExam)
    } */
  }  

  upload(){
  //  this.uploadDocument = !this.uploadDocument;
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    const string_length = 12;let randomstring = '';
    for (var i = 0; i < string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars[rnum];
        console.log(randomstring +'random digits');
    }
    return randomstring;
    
  }
}
