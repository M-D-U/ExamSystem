import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // reactiveForm!: UntypedFormGroup;
  studentForm: FormGroup;
  lecturerForm: FormGroup;
  examForm: FormGroup;
  constructor(private router: Router,private formBuilder: FormBuilder) { this.studentForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.lecturerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.examForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    /* this.reactiveForm = new UntypedFormGroup({
      email: new UntypedFormControl('', Validators.email),
      password: new UntypedFormControl('', Validators.required),
    }) */
    
  }

// login 
login(form: FormGroup){
  if (form.value.email === "51331403@mylife.unisa.ac.za") {
    this.router.navigate(['home']);
  } else if (form.value.email === "1389884@mylife.unisa.ac.za") {
    this.router.navigate(['reports']);
  } else if (form.value.email === "12345678@mylife.unisa.ac.za") {
    this.router.navigate(['exam']);
  } else {
    window.alert('Your form is invalid');
  }
    }
  }

