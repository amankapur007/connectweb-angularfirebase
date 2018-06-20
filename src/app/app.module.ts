import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from "angularfire2";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { environment } from "../environments/environment";

import * as firebase from 'firebase';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from '../routes';
import { AuthService } from './services/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { UserslistComponent } from './userslist/userslist.component';
import { DatabaseService } from './services/database.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    ChatroomComponent,
    UserslistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.config),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
