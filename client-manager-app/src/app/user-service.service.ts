import { Injectable } from '@angular/core';
import { Users } from './models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users: Users[] = [];
  constructor() {
    this.users = [ { 
      name: 'Mina Truong',
      username: 'mina',
      email: 'mina@gmail.com',
      address: 'San Jose'
      
     },
     { 
      name: 'John Watson',
      username: 'john',
      email: 'john@example.com',
      address: 'Ludhiana'
      
     },

     { 
      name: 'Tina Le',
      username: 'tina',
      email: 'tina@gmail.com',
      address: 'Fremont'
      
     },

     { 
      name: 'Ethan Han',
      username: 'ethan',
      email: 'ethan@gmail.com',
      address: 'San Jose'
      
     },
]
    
   }

   getUsers(){
    return this.users;
   }

   addUser(user:Users){
    this.users.push(user);
    
   
    
    
   }
}
