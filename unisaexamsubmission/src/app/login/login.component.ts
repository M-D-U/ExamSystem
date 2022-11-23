import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  reactiveForm!: UntypedFormGroup;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.reactiveForm = new UntypedFormGroup({
      email: new UntypedFormControl('', Validators.email),
      password: new UntypedFormControl('', Validators.required),
    })
  }
  // login 
login(){
  if(!this.reactiveForm.valid){
      window.alert('your form is invalid')
    }else{
      this.router.navigate(['home']);
      console.log(this.reactiveForm);
    }
    console.log(this.reactiveForm);
  }
}

