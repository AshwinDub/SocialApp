import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_model/user';
import { AccountService } from './_services/account.service';
import { PresenceService } from './_services/presence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private accountService: AccountService,
    private presenceService: PresenceService
  ) {}

  ngOnInit(): void {
    this.setCurrentUsers();
  }
  title = 'Dating App';
  users: any;

  setCurrentUsers() {
    const u = localStorage.getItem('user');
    const user: User = u != null ? JSON.parse(u) : null;
    if (user) {
      this.accountService.setCurrentUser(user);
      this.presenceService.createHubConnection(user);
    }
  }
}
