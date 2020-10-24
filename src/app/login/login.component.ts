import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() logIn = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.setUpForm();

    // if (this.loginService.getUser() && this.loginService.getToken()) {
    //   this.logIn.emit('')
    // }
    // I think this is preferably done with a Guard, but i couldn't get this to work neither.
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
      this.logIn.emit('');
    }), err => {
      this.failedLogin = true;
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
