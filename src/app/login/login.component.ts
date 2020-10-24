import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../login.service';

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

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
    ) { }

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

    const user = this.loginForm.value.name;
    const pass = this.loginForm.value.password;

    this.registration ? this.register(user, pass) : this.login(user, pass);
  }

  private login(user, pass) {

    this.loginService.login(user, pass).subscribe((res:any) => {
      sessionStorage.setItem('auth_token', res.access_token);
      sessionStorage.setItem('user_id', res.user_id);
    }), err => {
      console.log(err);
    }

  }

  private register(user, pass) {

    this.loginService.register(user, pass).subscribe(res => {
      console.log(res);
    }), err => {
      console.log(err);
    }

  }

  public changeAction() {
    this.registration = !this.registration;
  }
}
