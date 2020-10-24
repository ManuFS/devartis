import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public register(user: string, password: string) {
		return this.http.post('http://167.99.162.146/users/register',
			{
				'user': user,
				'password': password
			}, { headers: new HttpHeaders().set('Content-Type', 'application/json')
      .set('access_token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9')});
	}
  
  public login(user: string, password: string) {
		return this.http.post('http://167.99.162.146/users/login',
			{
				'user': user,
				'password': password
			}, { headers: new HttpHeaders().set('Content-Type', 'application/json')
      .set('access_token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9')});
	}
}
