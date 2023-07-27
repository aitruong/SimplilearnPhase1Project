import { Component } from '@angular/core';
import { Users } from '../models/users.model';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users: Users[] = [];

  constructor(private userService:UserServiceService){
   this.users=userService.getUsers();
  }

}
