import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, UntypedFormGroup } from '@angular/forms';
import { ExamsetupService } from '../services/examsetup.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  exam : string =''
  examPaper : any;
  moduleCode :string = '';
  dateExam: string = '';
  availableExams: any;
  value :any;
  moduleCodes = [ 
  'AST2652',
  'ICT1113',
  'CHE1504',
  'ICT1114',
  'CHE181T',
  'ICT1115',
  'ICT1116',
  'CHE2611',
  'ICT1117',
  'CHE2613',
  'CHE3701',
  'ICT1118',
  'ICT1119',
  'CHE3703',
  'ICT1120',
  'CHE3704',
  'CHE4801',
  'ICT2612',
  'ELE2561',
  'ICT3611',
  'ICT3722',
  'ENG1011',
  'MAT2612',
  'ENG1012',
  'ENG1013',
  'ENG1014',
  'ENG1015',
  'ENG1016',
  'ENG1017',
  'ENG1018',
  'ENG1019',
  ];
  errorMessage: string ='';
  
  constructor(private examSetupService: ExamsetupService) { }

  ngOnInit(): void {
  this.showExams();
  // this.onValueChange()
  }

  // exam paper property declaration
  examPaperPDF: File | any = null;
  // takes in the file input 
  onFileSelected(e:any) {
    this.examPaperPDF =e.target.files[0];
    console.log('checking to see if the file if its there', this.examPaperPDF);
  }

  onValueChange(value: any) {
    console.log(value);
    // this.http.post('https://api.example.com/values', { value }).subscribe();
  }




  // uploads the exam data to the API
  onUpload(f: NgForm,value:any) { 
    console.log(value +'check the module code to see if we can pick it up');
    console.log(this.dateExam);
    const myFormData = new FormData();
    const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      // add information to form data
       myFormData.append('moduleCode', value);
       myFormData.append('dateExam', this.dateExam);
      // check if user has inserted a file before uploading 
      if(!this.examPaperPDF){
        // window.alert('please choose a file before submitting');
        this.errorMessage = 'Please choose a PDF file before creating an exam';
        return 
      }else{
        myFormData.append('examPaperPDF', this.examPaperPDF);
      }
      // call the exam upload service api
      this.examSetupService.uploadExamination(myFormData).subscribe((res) => {
      headers: headers//add headers to send form as multipart form
      console.log(res);
      console.log(myFormData);
      if(res.status){
        window.alert(res.message)
      }else{
        window.alert(res.message)
      }
    });
  }

  // shows the exams
   showExams(){
    this.availableExams = this.examSetupService.showExams().subscribe(examsetup=>{
      this.availableExams = examsetup;
      console.table(this.availableExams);
    });
  }
}
