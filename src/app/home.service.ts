import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public feed(token) {
		return this.http.post('http://167.99.162.146/feeds/add',
			{ 
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`) 
      }
    );
	}
}
