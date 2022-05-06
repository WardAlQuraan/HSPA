import { Injectable } from '@angular/core';
import { IUser } from '../User/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }
addUser(user:IUser){
  let users :any = []  ;
  if(localStorage.getItem("Users")){
    users = localStorage.getItem("Users");
    users = JSON.parse(users);
    users = [user, ...users]
  }else{
    users = [user];
  }
  localStorage.setItem("Users",JSON.stringify(users));
}
}
