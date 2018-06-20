import { Routes } from "@angular/router";
import { LoginComponent } from "./app/login/login.component";
import { SignupComponent } from "./app/signup/signup.component";
import { ChatroomComponent } from "./app/chatroom/chatroom.component";
export const ROUTES: Routes=[
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'chatroom', component:ChatroomComponent},
    {path:'', pathMatch:'full', redirectTo:'/login'}
]