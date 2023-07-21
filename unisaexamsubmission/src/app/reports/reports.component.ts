import { Component, OnInit } from '@angular/core';
import { ExamoutputService } from '../services/examoutput.service';
import { ModuleinfoService } from '../services/moduleinfo.service';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  totalSubmissions : any;
  overallTotal = 0;
  totalNumberModules: any;
  toalcountModules = 0
  submissionsToday  : any;
  submissionThisWeek : any;
  constructor(private examOutputServe: ExamoutputService, private moduleinfoService: ModuleinfoService) { }

  ngOnInit(): void {
    this.getTotalSubmissions();
    this.totalModules();
    this.todaySubmissionsToday();
    this.todaySubmissionsForWeek();
  }

  // get the total number of exam submissions
  getTotalSubmissions(){
    this.examOutputServe.viewTotalExamSubmissions().subscribe((res) => {
      this.totalSubmissions = res;
      this.overallTotal = this.totalSubmissions.length;
      console.log(this.overallTotal);
      console.table(res);
    });
  }

  todaySubmissionsToday(){
    this.examOutputServe.viewTotalExamSubmissionsForToday().subscribe((res) =>{
      this.submissionsToday = res;
      console.log(this.submissionsToday);
    })
  }


  todaySubmissionsForWeek(){
    this.examOutputServe.viewTotalExamSubmissionsForWeek().subscribe((res) =>{
      this.submissionThisWeek = res;
      console.log(this.submissionThisWeek);
    })
  }


  // total modules
  totalModules(){
    this.moduleinfoService.getTotalModules().subscribe((res) => {
      this.totalNumberModules = res;
      this.toalcountModules = this.totalNumberModules.length;
      console.log(this.toalcountModules);
      console.table(res);
    });
  }
}
