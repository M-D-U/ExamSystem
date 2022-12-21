import { Component, OnInit } from '@angular/core';
import { ExamsetupService } from '../services/examsetup.service';
// import { ToastrService } from 'ngx-toastr/public_api';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  exam : string =''
  examPaper : any;
  constructor(private examSetupService: ExamsetupService) { }

  availableExams: any;

  ngOnInit(): void {
  this.showExams();
    // this.showSuccess();
  }


 /*  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  } */

  showExams(){
    this.availableExams = this.examSetupService.showExams().subscribe(examsetup=>{
      this.availableExams = examsetup;
      console.log(this.availableExams);
      
    });
  }

}
