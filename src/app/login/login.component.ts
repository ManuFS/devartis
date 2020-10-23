import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public registration: boolean = false;
  public loginForm = this.fb.group(
    {
      name: ['', Validators.required],
      password: ['', Validators.required]
    }
  )
  public warning: boolean = false;
  public failedLogin: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.setUpForm();
  }

  private setUpForm() {
    this.loginForm = this.fb.group(
      {
        name: ['', Validators.required],
        password: ['', Validators.required]
      }
    )
  }

  public action() { // "action" is too ambiguous
    if (!this.loginForm.valid) {
      this.warning = true;
      return
    } else {
      this.warning = false;
    }

    this.registration ? this.register : this.login();
  }

  private login() {

  }

  private register() {
    
  }

  public changeAction() {
    this.registration = !this.registration;
  }
}
