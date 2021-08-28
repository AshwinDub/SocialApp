import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CallModalComponent } from '../_modals/call-modal/call-modal.component';
import { User } from '../_model/user';
import { CallService } from './call.service';
import { ConfirmService } from './confirm.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class PresenceService {
  hubUrl = environment.hubUrl;
  private hubConnection!: HubConnection;
  private onlineUsersSource = new BehaviorSubject<string[]>([]);
  onlineUsers$ = this.onlineUsersSource.asObservable();
  bsModalRef!: BsModalRef;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private confirmService: ConfirmService,
    private callService: CallService,
    private messageService: MessageService,
    private modalService: BsModalService
  ) {}

  createHubConnection(user: User) {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.hubUrl + 'presence', {
        accessTokenFactory: () => user.token,
      })
      .withAutomaticReconnect()
      .build();

    this.hubConnection.start().catch((error) => console.log(error));

    this.hubConnection.on('UserIsOnline', (username) => {
      this.onlineUsers$.pipe(take(1)).subscribe((usernames) => {
        this.onlineUsersSource.next([...usernames, username]);
      });
    });

    this.hubConnection.on('UserIsOffline', (username) => {
      this.onlineUsers$.pipe(take(1)).subscribe((usernames) => {
        this.onlineUsersSource.next([
          ...usernames.filter((x) => x !== username),
        ]);
      });
    });

    this.hubConnection.on('GetOnlineUsers', (usernames: string[]) => {
      this.onlineUsersSource.next(usernames);
    });
    this.hubConnection.on('NewMessageReceived', ({ username, knownAs }) => {
      this.toastr
        .info(knownAs + ' has sent you a new message')
        .onTap.pipe(take(1))
        .subscribe(() =>
          this.router.navigateByUrl('/members/' + username + '?tab=3')
        );
    });
    this.hubConnection.on(
      'NewCallReceiving',
      ({ username, knownAs, peerId }) => {
        this.confirmService
          .confirm(
            'Incoming call',
            knownAs + ' is calling',
            'Accept',
            'Decline'
          )
          .pipe(take(1))
          .subscribe((isAccepted) => {
            if (isAccepted) {
              this.callService.establishMediaCall(peerId);
              this.callService.isCallStarted$
                .pipe(take(1))
                .subscribe((isCallStarted) => {
                  if (isCallStarted) {
                    const config = {
                      class: 'modal-dialog-centered modal-lg',
                      initialState: {
                        peerId: peerId,
                        isCallStarted: true,
                      },
                    };
                    this.bsModalRef = this.modalService.show(
                      CallModalComponent,
                      config
                    );
                  }
                });
            } else {
              this.messageService.callDecline(username);
            }
          });
      }
    );
  }

  stopHubConnection() {
    this.hubConnection.stop().catch((error) => console.log(error));
  }
}
