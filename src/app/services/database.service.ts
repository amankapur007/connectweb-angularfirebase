import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { UserModel } from '../models/user.model';
import { MessageModel } from '../models/message.model';
import * as firebase from 'firebase/app';

@Injectable()
export class DatabaseService {

  messages:FirebaseListObservable<any>;
  constructor(private _db:AngularFireDatabase) { }

  updateUser(email, name, status, uid, photourl){
    const path = `users/${uid}`;
    const data:UserModel={
      emailId:email,
      displayName:name,
      status:status,
      photourl:photourl
    }

    return this._db.object(path).update(data);
  }

  getUsers(){
    const path="users"
    return this._db.list(path);
  }

  sendMessage(message:string, displayName:string, email:string){
    const path="messages/"
    this.messages= this.getMessages();
    
    var data:MessageModel={
      displayName:displayName,
      emailId:email,
      timeStamp:this.getDate(),
      message:message
    }

    this.messages.push(data);
  }

  getDate(){
    var date:Date = new Date()
    return date.getUTCFullYear()+"/"+date.getUTCMonth()+"/"+date.getUTCDate()+
    " "+date.getUTCHours()+":"+date.getUTCMinutes()+":"+date.getUTCSeconds();
  }

  getMessages(){
    return this._db.list('messages',{
      query:{
        limitToLast:25,
      }
    })
  }

}
