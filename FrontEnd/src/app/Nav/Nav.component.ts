import { Component, OnInit } from '@angular/core';
import { PathRoutes } from '../PathRoutes';

@Component({
  selector: 'app-Nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})

export class NavComponent implements OnInit {

  addProperty:string = '/'+PathRoutes.addProperty;
  rentProperty:string ='/'+PathRoutes.rentProperty;
  listProperty:string ='/'+PathRoutes.listProperty;
  detailProperty:string ='/'+PathRoutes.detailProperty;
  userLogin:string = "/"+PathRoutes.userLogin;
  userRegister:string = "/"+PathRoutes.userRegister;
  constructor() { }

  ngOnInit() {
  }
  loggedIn(){
    return localStorage.getItem("token");
  }
  OnLogout(){
    localStorage.removeItem("token");
  }


}
