import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  randomstring = '';
  user = 'OD MASEKO';
  date = new Date();
  uploadDocument = false;
  examSetup = {name: 'CHE1709', DateExam: new Date(20220629), Description:' Introductory Chemisty in Industrial Development', staffEmail: 'jh.nel@unisa.ac.za', ExamPaper: '../assets/exampaper/101_2020_3b.pdf'};
  constructor() { }

  ngOnInit(): void {
    // this.showDate();
    setInterval(() => {
      this.date = new Date();
    }, 1);

    this.showExams();
  }


  showExams(){
    /* this.date.getFullYear();
    this.date.getMonth();
    this.date.getDay();
    const exam = this.examSetup.DateExam
    console.log(this.date.getMonth(), 'is current month');
    exam.getMonth()
    if(exam.getMonth() === this.date.getMonth()){
      window.alert('the month matches')
    }else{
      window.alert('no exam today')
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
