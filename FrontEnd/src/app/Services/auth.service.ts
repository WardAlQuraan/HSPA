import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }
authUser(user:any){
  let users:any = [];
  if(localStorage.getItem("Users")){
    users = localStorage.getItem("Users");
    users = JSON.parse(users);
    return users.find((p: { email: string; password: string; })=>
                      p.email == user.email && p.password == user.password);
  }
  return null;
}

}
