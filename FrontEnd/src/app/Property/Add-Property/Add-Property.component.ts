import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-Add-Property',
  templateUrl: './Add-Property.component.html',
  styleUrls: ['./Add-Property.component.css']
})
export class AddPropertyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(Form:NgForm){
    console.log(Form)
  }

}
