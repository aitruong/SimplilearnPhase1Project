import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Users } from '../models/users.model';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  users:Users[]=[];
  // fname:string="";
  // email:string="";
  // address:string="";
  // username:string="";

  user =new FormGroup({
  fname:new FormControl(),
  email:new FormControl(),
  address:new FormControl(),
  userName:new FormControl()
  
  }
  );
  constructor(private userService:UserServiceService){
    

  }
  onSubmit(){
    
    console.log(this.user.value);
    const formValue=this.user.value;
    this.userService.addUser(new Users(formValue.fname,formValue.userName,formValue.email,formValue.address));
    
    
  }

}
