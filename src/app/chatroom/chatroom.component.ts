import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from "rxjs";
import * as firebase from 'firebase/app';
import { DatabaseService } from '../services/database.service';


@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})

export class ChatroomComponent implements OnInit,AfterViewChecked {

  user:Observable<firebase.User>;
  emailId:string;
  name:string;
  message:string;
  messages:Observable<any>;
  @ViewChild('output') private output:ElementRef;
  constructor(private _auth:AuthService, private _db:DatabaseService) { }

  ngOnInit() {
    this.user=this._auth.getAuthUser();
    this.user.subscribe((user)=>{
      this.name= user.displayName;
      this.emailId= user.email;
    });

    this.messages = this._db.getMessages();
  }

  ngAfterViewChecked(){
    this.scrollToBottom();
  }
  
  scrollToBottom(){
    console.log('Aman')
    this.output.nativeElement.scrollTop = this.output.nativeElement.scrollHeight;
  }

  sendMessage(){
    this._db.sendMessage(this.message, this.emailId, this.name);
  }
}
