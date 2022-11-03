import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})

  


export class LoginComponent implements OnInit {


  myForm:FormGroup;

  constructor(
    private fb:FormBuilder
  ) {
    this.myForm = this.fb.group({
      email:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(6),,Validators.maxLength(10)]],
      }) 
      
   }
      

  ngOnInit(): void {
  }

  login(){
    console.log(this.myForm.value)
  }

}

/*
    <div class="example-container">
        <mat-form-field appearance="fill">
          <mat-label>Enter your email</mat-label>
          <input matInput placeholder="pat@example.com" [formControl]="email" required>
          <mat-error *ngIf="email.invalid">{{getErrorMessage()}}</mat-error>
        </mat-form-field>
      </div>
      */