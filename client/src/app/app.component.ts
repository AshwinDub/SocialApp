import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {  }

  ngOnInit(): void {
    this.getUsers()
  }
  title = 'Dating App';
  users: any;

  getUsers() {
    this.http.get('https://localhost:5001/api/Users').subscribe(users =>{
      this.users = users
      console.log(users);
    },error => {
      console.log(error);
    });
  }
}
