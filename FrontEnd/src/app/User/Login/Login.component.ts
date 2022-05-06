import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private alertify:AlertifyService, private router:Router) { }

  ngOnInit() {
  }
  OnLogin(loginForm:NgForm){
    const token = this.auth.authUser(this.UserDetails(loginForm));
    if(token)
    {
      localStorage.setItem("token",token.name);
      this.alertify.Success("Login Successfully");
      this.router.navigate(["/"]);
    }else{
      this.alertify.Error("login not successful")
    }
  }
  UserDetails(loginForm:NgForm){
    let user:any = {
      email: loginForm.controls["email"].value,
      password : loginForm.controls["password"].value
    }
    return user;
  }
}
