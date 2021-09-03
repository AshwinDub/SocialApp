import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from './_model/user';
import { AccountService } from './_services/account.service';
import { CallService } from './_services/call.service';
import { PresenceService } from './_services/presence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private accountService: AccountService,
    private presenceService: PresenceService,
    private callService: CallService
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
      this.callService.initPeer();
    }
  }

  ngOnDestroy(): void {
    this.callService.destroyPeer();
  }
}
