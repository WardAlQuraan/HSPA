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

  constructor() { }

  ngOnInit() {
  }

}
