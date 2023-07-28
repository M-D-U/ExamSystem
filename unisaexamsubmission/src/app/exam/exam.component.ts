import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, UntypedFormGroup } from '@angular/forms';
import { ExamsetupService } from '../services/examsetup.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
})
export class ExamComponent implements OnInit {
  exam: string = '';
  examPaper: any;
  moduleCode: string = '';
  dateExam: string = '';
  availableExams: any;
  value: any;
  id: number | undefined;
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
  showSuccessToast = false;
  showErrorToast = false;
  errorMessage = '';
  deleteToast = false;

  constructor(private examSetupService: ExamsetupService) { }

  ngOnInit(): void {
    this.showExams();
  }

  // exam paper property declaration
  examPaperPDF: File | any = null;
  // takes in the file input
  onFileSelected(e: any) {
    this.examPaperPDF = e.target.files[0];
    console.log('checking to see if the file if its there', this.examPaperPDF);
  }

  onValueChange(value: any) {
    console.log(value);
  }

  // uploads the exam data to the API
  onUpload(f: NgForm, value: any) {
    console.log(value + 'check the module code to see if we can pick it up');
    console.log(this.dateExam);
    const myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    // add information to form data
    myFormData.append('moduleCode', value);
    myFormData.append('dateExam', this.dateExam);
    // check if user has inserted a file before uploading
    if (!this.examPaperPDF && this.dateExam === '') {
      // window.alert('please choose a file before submitting');
      this.errorMessage =
        'Please choose a PDF file/ add date before creating an exam';
      return;
    } else {
      myFormData.append('examPaperPDF', this.examPaperPDF);
    }
    // call the exam upload service api
    this.examSetupService.uploadExamination(myFormData).subscribe((res) => {
      headers: headers; //add headers to send form as multipart form
      console.log(res);
      console.log(myFormData);
      if (res.status) {
        // window.alert(res.message)
        // Show the success toast when the exam is uploaded successfully
        this.showSuccessToast = true;
      } else {
        // window.alert(res.message)
        // Show the error toast when there is an error in the response
        this.showErrorToast = true;
        this.errorMessage = res.message;
      }
      this.showExams();
      (error: any) => {
        // Handle errors, if any
        console.log('Error:', error);
        this.showErrorToast = true;
        this.errorMessage = 'An error occurred during the exam upload.';
        this.showExams();
      };
    });
  }

  // Function to get the download URL for a PDF
  downloadExamPaper(examPaperPDF: string) {
    /* this.examSetupService.downloadPDF(examPaperPDF).subscribe(
      (data: Blob) => {
        // Create a Blob from the response data
        const blob = new Blob([data], { type: 'application/pdf' });

        // Create a URL for the Blob and open it in a new window
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      (error: any) => {
        console.error('Error while downloading the file:', error);
        // Handle the error, e.g., show an error message to the user
      }
    ); */
  }
  

  // shows the exams
  showExams() {
    this.availableExams = this.examSetupService
      .showExams()
      .subscribe((examsetup) => {
        this.availableExams = examsetup;
        console.table(this.availableExams);
      });
  }

  // delete an exam
  onDeleteExam(id: number) {
    this.examSetupService.deleteExam(id).subscribe((res) => {
      console.log('Exam deleted successfully:', res);
      this.deleteToast = true; // show deletion toast
      this.showExams(); // Refresh the exams list after deletion
    });
  }
}
