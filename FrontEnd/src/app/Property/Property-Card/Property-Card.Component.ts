import { Component } from "@angular/core";

@Component(
  {
    selector:"app-property-card",
    templateUrl:"Property-Card.Component.html",
    styleUrls:["Property-Card.Component.css"]
  }
)
export class PropertyCardComponent
{
  property:any = {
    "Id":1,
    "Name":"ward house",
    "Type":"house",
    "Price":12000
  }
}
