import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    email = new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      Validators.email
    ]);

    password = new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')
    ]);

    loginForm: FormGroup = this.formBuilder.group({
      email: this.email,
      password: this.password
    })


  constructor(private formBuilder: FormBuilder) { }

  login(){
    console.log(this.loginForm.value);
  }

  ngOnInit() {  }

}