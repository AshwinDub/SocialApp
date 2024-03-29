import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Peer from 'peerjs';
import { BehaviorSubject, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CallService {
  peer!: Peer;
  mediaCall!: Peer.MediaConnection;

  localStreamBs = new BehaviorSubject<MediaStream | null>(null);
  localStream$ = this.localStreamBs.asObservable();

  remoteStreamBs = new BehaviorSubject<MediaStream | null>(null);
  remoteStream$ = this.remoteStreamBs.asObservable();

  isCallStartedBs = new Subject<boolean>();
  isCallStarted$ = this.isCallStartedBs.asObservable();

  peerBs = new Subject<Peer>();
  peerBs$ = this.peerBs.asObservable();

  constructor(private toastrService: ToastrService) {
    this.peerBs$.pipe(take(1)).subscribe((peer) => this.peer == peer);
  }

  initPeer(): string {
    let id = this.generateUniqueId();
    if (!this.peer || this.peer.disconnected) {
      const peerJsOptions: Peer.PeerJSOption = {
        debug: 3,
        config: {
          iceServers: [
            {
              urls: [
                'stun:stun1.l.google.com:19302',
                'stun:stun2.l.google.com:19302',
              ],
            },
          ],
        },
      };
      try {
        this.peer = new Peer(id, peerJsOptions);
        this.peerBs.next(this.peer);
        return id;
      } catch (error) {
        console.error(error);
        return '';
      }
    }
    return id;
  }

  async establishMediaCall(remotePeerId: string) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      if (!this.peer || this.peer.disconnected) {
        this.initPeer();
      }
      const connection = this.peer.connect(remotePeerId);

      connection.on('error', (error) => {
        console.error(error);
        this.toastrService.error(error);
      });

      this.mediaCall = this.peer.call(remotePeerId, stream);
      if (!this.mediaCall) {
        let errorMessage = 'Unable to connect to remote peer';
        this.toastrService.error(errorMessage);
        throw new Error(errorMessage);
      }

      this.localStreamBs.next(stream);
      this.isCallStartedBs.next(true);

      this.mediaCall.on('stream', (remoteStream) =>
        this.remoteStreamBs.next(remoteStream)
      );

      this.mediaCall.on('error', (err) => {
        console.error(err);
        this.toastrService.error(err);
        this.isCallStartedBs.next(false);
      });

      this.mediaCall.on('close', () => this.onCallClose());
    } catch (error) {
      console.error(error);
      this.isCallStartedBs.next(false);
    }
  }

  public async enableCallAnswer() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      this.localStreamBs.next(stream);
      this.peer.on('call', async (call) => {
        this.mediaCall = call;
        this.isCallStartedBs.next(true);

        this.mediaCall.answer(stream);
        this.mediaCall.on('stream', (remoteStream) => {
          this.remoteStreamBs.next(remoteStream);
        });
        this.mediaCall.on('error', (err) => {
          this.toastrService.error(err);
          this.isCallStartedBs.next(false);
          console.error(err);
        });
        this.mediaCall.on('close', () => this.onCallClose());
      });
    } catch (ex) {
      console.error(ex);
      this.toastrService.error(ex);
      this.isCallStartedBs.next(false);
    }
  }
  onCallClose() {
    let remote = (this.remoteStreamBs as BehaviorSubject<MediaStream>).value;
    if (remote) {
      remote.getTracks().forEach((track) => {
        track.stop();
      });
    }
    let local = (this.localStreamBs as BehaviorSubject<MediaStream>).value;
    if (local) {
      local.getTracks().forEach((track) => {
        track.stop();
      });
    }
    // this.toastrService.info('Call Ended');
  }
  public closeMediaCall() {
    this.mediaCall?.close();
    if (!this.mediaCall) {
      this.onCallClose();
    }
    this.isCallStartedBs.next(false);
  }
  public destroyPeer() {
    this.mediaCall?.close();
    this.peer?.disconnect();
    this.peer?.destroy();
  }
  public callDecline() {}
  generateUniqueId(): string {
    return (Math.random().toString(36) + '0000000000000000000').substr(2, 16);
  }
}
