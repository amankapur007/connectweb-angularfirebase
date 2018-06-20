import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Observable } from "rxjs";
@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  users:Observable<any[]>;
  constructor(private _db:DatabaseService) { }

  ngOnInit() {
    this.users = this._db.getUsers();
  }

}
