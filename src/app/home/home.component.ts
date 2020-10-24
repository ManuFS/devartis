import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isLogged: boolean = false;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    
  }

  public logged() {
    this.isLogged = true;
    this.feedSuscribe();
  }

  public feedSuscribe() {
    const token = sessionStorage.getItem('auth_token');
    this.homeService.feed(token).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }
}
