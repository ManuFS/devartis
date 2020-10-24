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
				user,
				password
			});
	}
  
  public login(user: string, password: string) {
		return this.http.post('http://167.99.162.146/users/login',
			{
				user,
        password
			});
  }
  
  public getUser(): string {
    return sessionStorage.getItem('user_id');
  }

  public getToken(): string {
    return sessionStorage.getItem('auth_token');
  }
}
