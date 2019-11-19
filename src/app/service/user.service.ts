import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable()
export class UserService {
   createUser(user: User) {
     console.log('Id: ' + user.id);
     console.log('Username: ' + user.username);
     console.log('Password: ' + user.password);
   }
} 