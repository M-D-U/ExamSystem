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
  constructor(private examOutputServe: ExamoutputService, private moduleinfoService: ModuleinfoService) { }

  ngOnInit(): void {
    this.getTotalSubmissions();
    this.totalModules();
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

  totalModules(){
    this.moduleinfoService.getTotalModules().subscribe((res) => {
      this.totalNumberModules = res;
      this.toalcountModules = this.totalNumberModules.length;
      console.log(this.toalcountModules);
      console.table(res);
    });
  }
}
