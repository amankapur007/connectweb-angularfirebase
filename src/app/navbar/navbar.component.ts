import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';
import { DatabaseService } from '../services/database.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  appname:string
  user:Observable<firebase.User>
  name:string;
  constructor(private _authService: AuthService, private _db :DatabaseService, 
      private _router:Router) { }


  ngOnInit() {
    this.appname='>_connectweb'
    this.user = this._authService.getAuthUser();
    this.user.subscribe((user)=>{
      if(user!=undefined){
      this.name=user.displayName;
      }
    })
  }

  logout(){
    var user = this._authService.getAuthUserId();
      console.log('Hi');
      if(user!=undefined && user!=null){
      var update = this._db.updateUser(user.email, user.displayName, 
        environment.status.offline,user.uid, user.photoURL);
      update.then((res)=>{
        this._authService.logout().then(()=>{
          this._router.navigate(['']);
        });
      }).catch((err)=>{
        console.log('err',err);
      })
    }
  }
  ngOnDestroy(){
    this.user.subscribe().closed;
  }
}
