import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
    Validators.email
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$')
  ]);

  confirmPassword = new FormControl('', [
    Validators.required
  ]);

  registerForm: FormGroup = this.formBuilder.group({
    email: this.email,
    password: this.password,
    confirmPassword: this.confirmPassword
  })

  constructor(private formBuilder: FormBuilder) { }

  register(){
    console.log(this.registerForm.value);
  }

  ngOnInit() {
  }

}
