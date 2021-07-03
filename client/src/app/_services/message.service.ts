import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BusyService } from '../busy.service';
import { Group } from '../_model/group';
import { Message } from '../_model/message';
import { User } from '../_model/user';
import { CallService } from './call.service';
import { getPaginatedResult, getPaginationHeaders } from './paginationHelper';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  baseUrl = environment.apiUrl;
  hubUrl = environment.hubUrl;
  private hubConnection!: HubConnection;
  private messageThreadSource = new BehaviorSubject<Message[]>([]);
  messageThread$ = this.messageThreadSource.asObservable();

  constructor(
    private http: HttpClient,
    private busyService: BusyService,
    private callService: CallService
  ) {}

  createHubConnection(user: User, otherUsername: string) {
    this.busyService.busy();
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.hubUrl + 'message?user=' + otherUsername, {
        accessTokenFactory: () => user.token,
      })
      .withAutomaticReconnect()
      .build();

    this.hubConnection
      .start()
      .catch((error) => console.log(error))
      .finally(() => this.busyService.idle());

    this.hubConnection.on('ReceiveMessageThread', (messages) => {
      this.messageThreadSource.next(messages);
    });
    this.hubConnection.on('NewMessage', (message) => {
      this.messageThread$.pipe(take(1)).subscribe((messages) => {
        this.messageThreadSource.next([...messages, message]);
      });
    });
    this.hubConnection.on('CallDecline', ({ isCallDecline }) => {
      if (isCallDecline) {
        this.callService.closeMediaCall();
      }
    });
    this.hubConnection.on('UpdatedGroup', (group: Group) => {
      if (group.connections.some((x) => x.username === otherUsername)) {
        this.messageThread$.pipe(take(1)).subscribe((messages) => {
          messages.forEach((message) => {
            if (!message.dateRead) {
              message.dateRead = new Date(Date.now());
            }
          });
          this.messageThreadSource.next([...messages]);
        });
      }
    });
  }

  stopHubConnection() {
    if (this.hubConnection) {
      this.messageThreadSource.next([]);
      this.hubConnection.stop().catch((error) => console.log(error));
    }
  }

  getMessages(pageNumber: number, pageSize: number, container: string) {
    let params = getPaginationHeaders(pageNumber, pageSize);
    params = params.append('Container', container);

    return getPaginatedResult<Message[]>(
      this.baseUrl + 'messages',
      params,
      this.http
    );
  }

  getMessageThread(username: string) {
    return this.http.get<Message[]>(
      this.baseUrl + 'Messages/thread/' + username
    );
  }

  async sendMessage(username: string, content: string) {
    return this.hubConnection
      .invoke('SendMessage', {
        recipientUsername: username,
        content,
      })
      .catch((error) => console.log(error));
  }

  async makeCall(username: string, peerId: string) {
    return this.hubConnection
      .invoke('MakeCall', {
        recipientUsername: username,
        peerId,
      })
      .catch((error) => console.log(error));
  }
  async callDecline(username: string) {
    return this.hubConnection
      .invoke('DeclineCall', {
        recipientUsername: username,
      })
      .catch((error) => console.log(error));
  }

  deleteMessage(id: number) {
    return this.http.delete(this.baseUrl + 'messages/' + id);
  }
}
