import { Component, OnInit } from '@angular/core';
import { ExamsetupService } from '../services/examsetup.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  exam : string =''
  constructor(private examSetupService: ExamsetupService) { }

  availableExams: any;

  ngOnInit(): void {
  this.showExams();

  }


  showExams(){
    this.availableExams = this.examSetupService.showExams().subscribe(examsetup=>{
      this.availableExams = examsetup;
      console.log(this.availableExams);
      
    });
  }

}
