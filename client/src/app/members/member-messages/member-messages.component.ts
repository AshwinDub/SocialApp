import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { take } from 'rxjs/operators';
import { CallModalComponent } from 'src/app/_modals/call-modal/call-modal.component';
import { Message } from 'src/app/_model/message';
import { User } from 'src/app/_model/user';
import { AccountService } from 'src/app/_services/account.service';
import { CallService } from 'src/app/_services/call.service';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.scss'],
})
export class MemberMessagesComponent implements OnInit, OnDestroy {
  @ViewChild('messageForm') messageForm!: NgForm;
  @Input() messages!: Message[];
  @Input() username!: string;
  messageContent!: string;
  loading = false;
  peerId!: string;
  bsModalRef!: BsModalRef;
  user!: User;

  constructor(
    public messageService: MessageService,
    private callService: CallService,
    private modalService: BsModalService,
    private accountService: AccountService
  ) {
    this.accountService.currentUser$
      .pipe(take(1))
      .subscribe((user) => (this.user = user || new User()));
    this.peerId = callService.initPeer();
  }

  ngOnInit(): void {}

  sendMessage() {
    this.loading = true;
    this.messageService
      .sendMessage(this.username, this.messageContent)
      .then(() => {
        this.messageForm.reset();
      })
      .finally(() => (this.loading = false));
  }

  makeCall() {
    const config = {
      class: 'modal-dialog-centered',
      initialState: {
        peerId: this.peerId,
        isCallStarted: false,
      },
    };
    this.bsModalRef = this.modalService.show(CallModalComponent, config);
    this.messageService.makeCall(this.username, this.peerId).then(() => {
      this.callService.enableCallAnswer();
      this.callService.isCallStarted$
        .pipe(take(1))
        .subscribe((isCallActive) => {
          if (!isCallActive) {
            this.bsModalRef.hide();
          }
        });
    });
  }

  ngOnDestroy(): void {
    this.callService.closeMediaCall();
    this.callService.destroyPeer();
  }
}
