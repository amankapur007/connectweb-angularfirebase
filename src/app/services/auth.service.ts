import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import { Observable } from "rxjs/Rx";

import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  authState:any;
  user:Observable<firebase.User>;
  provider:any;
  constructor(private _router: Router, private _auth: AngularFireAuth, 
    private _db: AngularFireDatabase) { 
      console.log('const')
      this.provider = new firebase.auth.GoogleAuthProvider();
    }

  logInWithGoogle(email){
    return firebase.auth().signInWithPopup(this.provider).then((result)=>{
      return result.user;
    }).catch(error=>{
      console.log(error);
      throw Observable.throw(error);
    })
  }

  getAuthUser(){
      return Observable.create(observer=>{        
        firebase.auth().onAuthStateChanged((user)=>{
          observer.next(user);
        })
      })
  }

  getAuthUserId(){
    return firebase.auth().currentUser;
  }

  logout(){
    return firebase.auth().signOut();
  }

}
