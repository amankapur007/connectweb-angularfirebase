import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ErrorModel } from '../models/error.model';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { DatabaseService } from '../services/database.service';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs/Observable";
import { firestore } from 'firebase';
import { FirebaseApp } from 'angularfire2';

import * as firebase from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  error:ErrorModel;
  constructor(private _authService: AuthService, private _router:Router, private _db:DatabaseService) { }

  ngOnInit() {
    var user:Observable<firebase.User> = this._authService.getAuthUser();
    user.subscribe((user)=>{
      if(user!=null && user!=undefined){
        this._router.navigate(['chatroom'])
      }
    })
  }

  loginWithGoogle(){
    this._authService.logInWithGoogle(this.email).then((user)=>{
      var update = this._db.updateUser(user.email, user.displayName, 
        environment.status.online, user.uid, user.photoURL);
      update.then((res)=>{this._router.navigate(['chatroom']);},(err)=>{
        this.error = new ErrorModel();
        this.error.msg='Connect codelearners@gmail.com';
      })
      
    }).catch((error:ErrorObservable)=>{
      this.error = new ErrorModel();
      this.error.msg=error.error.message;  
    })
  }
}
