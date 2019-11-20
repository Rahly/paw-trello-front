import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {  }

}